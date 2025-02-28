import mealList from "@/data/emmisionPerMealType.json";
import { NextResponse } from "next/server";
import {
  getElectricityEmission,
  getTransportEmissionFromFlight,
  getTransportEmissionFromCar,
  getTransportEmissionFromPublicTransit,
  getTransportEmissionFromMotorBike,
} from "@/utils/calculatorFunctions";


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract user consumptions from search params
    const consumptions = {
      electricity: parseFloat(searchParams.get("electricity") || "0"),
      transportFlight: parseFloat(searchParams.get("transportFlight") || "0"),
      transportCar: parseFloat(searchParams.get("transportCar") || "0"),
      transportPublicTransit: parseFloat(
        searchParams.get("transportPublic") || "0"
      ),
      transportMotorBike: parseFloat(
        searchParams.get("transportMotorbike") || "0"
      ),
      foodConsumed: parseFloat(searchParams.get("food") || "0"),
      mealType: searchParams.get("mealType") || "mixed",
      wasteGenerated: parseFloat(searchParams.get("waste") || "0"),
    };

    const country = searchParams.get("country") || "US"; 
    const householdSize: number = parseInt(searchParams.get("householdSize") || "1", 10);


    // emmisions calculation
    const electricity = await getElectricityEmission(
      country,
      (consumptions.electricity*12)/householdSize
    );


    const transportFlight = await getTransportEmissionFromFlight(
      consumptions.transportFlight * 12
    );
    const transportCar = await getTransportEmissionFromCar(
      consumptions.transportCar * 12
    );
    const transportPublic = await getTransportEmissionFromPublicTransit(
      consumptions.transportPublicTransit * 12
    );
    const transportMotorBike = await getTransportEmissionFromMotorBike(
      consumptions.transportMotorBike * 12
    );

    const transport =
      transportFlight + transportCar + transportPublic + transportMotorBike;

    const wasteEmissionFactor = 0.5;
    const mealsEmissionFactor = mealList[consumptions.mealType  as keyof typeof mealList ];

    const waste = consumptions.wasteGenerated * wasteEmissionFactor * 52;
    const meals = consumptions.foodConsumed * mealsEmissionFactor * 365;

    const totalFootprint = electricity + transport + waste + meals;
    console.log({
      totalFootprint,
      particularFootprints: {
        transport,
        electricity,
        waste,
        meals,
      },
    });
    return NextResponse.json({
      totalFootprint,
      particularFootprints: {
        transport,
        electricity,
        waste,
        meals,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to calculate footprint" },
      { status: 500 }
    );
  }
}

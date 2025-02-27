// import { NextResponse } from "next/server";
// import { getElectricityEmission, getTransportEmission } from "@/utils/calculatorFunctions";

// export async function GET(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);

//     // Extract user consumptions from search params
//     const consumptions = {
//       electricityConsumed: parseFloat(searchParams.get("electricity") || "0"),
//       transportConsumedFlight: parseFloat(searchParams.get("transportFlight") || "0"),
//       transportConsumedCar: parseFloat(searchParams.get("transportCar") || "0"),
//       transportConsumedPublicTransit: parseFloat(searchParams.get("transportPublic") || "0"),
//       transportConsumedMotorBike: parseFloat(searchParams.get("transportMotorbike") || "0"),
//       foodConsumed: parseFloat(searchParams.get("food") || "0"),
//       wasteGenerated: parseFloat(searchParams.get("waste") || "0"),
//     };

//     const country = searchParams.get("country") || "US"; // Default to US if missing

//     // Calculate emissions
//     const electricity = await getElectricityEmission(country, consumptions.electricityConsumed);

//     const transportFlight = await getTransportEmission(
//       "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight",
//       consumptions.transportConsumedFlight,
//       "DomesticFlight"
//     );

//     const transportCar = await getTransportEmission(
//       "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel",
//       consumptions.transportConsumedCar,
//       "SmallDieselCar"
//     );

//     const transportPublic = await getTransportEmission(
//       "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit",
//       consumptions.transportConsumedPublicTransit,
//       "Taxi"
//     );

//     const transportMotorBike = await getTransportEmission(
//       "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromMotorBike",
//       consumptions.transportConsumedMotorBike,
//       "SmallMotorBike"
//     );

//     // Summing up transport emissions
//     const transport = transportFlight + transportCar + transportPublic + transportMotorBike;

//     // Using arbitrary values for waste & meals emissions
//     const wasteEmissionFactor = 0.5; // kgCO₂ per kg of waste (example)
//     const mealsEmissionFactor = 2.5; // kgCO₂ per meal (example)

//     const waste = consumptions.wasteGenerated * wasteEmissionFactor * 365; // Yearly waste emission
//     const meals = consumptions.foodConsumed * mealsEmissionFactor * 365; // Yearly meals emission

//     // Total footprint
//     const totalFootprint = electricity + transport + waste + meals;

//     return NextResponse.json({
//       totalFootprint,
//       particularFootprints: {
//         transport,
//         electricity,
//         waste,
//         meals,
//       },
//     });
//   } catch (error) {
//     console.error("Error calculating footprint:", error);
//     return NextResponse.json({ error: "Failed to calculate footprint" }, { status: 500 });
//   }
// }

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
      wasteGenerated: parseFloat(searchParams.get("waste") || "0"),
    };

    const country = searchParams.get("country") || "US"; // Default to US if missing

    // Calculate emissions
    const electricity = await getElectricityEmission(
      country,
      consumptions.electricity
    );
    const transportFlight = await getTransportEmissionFromFlight(
      consumptions.transportFlight
    );
    const transportCar = await getTransportEmissionFromCar(
      consumptions.transportCar
    );
    const transportPublic = await getTransportEmissionFromPublicTransit(
      consumptions.transportPublicTransit
    );
    const transportMotorBike = await getTransportEmissionFromMotorBike(
      consumptions.transportMotorBike
    );

    // Summing up transport emissions
    const transport =
      transportFlight + transportCar + transportPublic + transportMotorBike;

    // Using arbitrary values for waste & meals emissions
    const wasteEmissionFactor = 0.5; // kgCO₂ per kg of waste (example)
    const mealsEmissionFactor = 2.5; // kgCO₂ per meal (example)

    const waste = consumptions.wasteGenerated * wasteEmissionFactor * 365; // Yearly waste emission
    const meals = consumptions.foodConsumed * mealsEmissionFactor * 365; // Yearly meals emission

    // Total footprint
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

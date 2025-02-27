import axios from "axios";

interface CarbonFootprintResponse {
  carbonEquivalent: number;
}

export async function getTransportEmissionFromFlight(distance: number) {
  try {
    const response = await axios.get(
      "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight",
      {
        params: {
          distance: distance,
          type: "DomesticFlight",
        },
        headers: {
          "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        },
      }
    );
        console.log("Flight: ", response)
    return response.data.carbonEquivalent;
  } catch (error) {
    console.log(error);
  }
}

export async function getTransportEmissionFromCar(
  distance: number
): Promise<any> {
  try {
    const response = await axios.get(
      "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel",
      {
        params: {
          distance: distance,
          type: "SmallDieselCar",
        },
        headers: {
          "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        },
      }
    );
        console.log("Car: ", response)
    return response.data.carbonEquivalent;
  } catch (error) {
    console.error("Error fetching carbon footprint:", error);
  }
}

export async function getTransportEmissionFromMotorBike(distance: number) {
  try {
    const response = await axios.get(
      "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromMotorBike",
      {
        params: {
          distance: distance,
          type: "SmallMotorBike",
        },
        headers: {
          "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        },
      }
    );
        console.log("MotorBike: ", response)
    return response.data.carbonEquivalent;
  } catch (error) {
    console.error("Error fetching carbon footprint:", error);
  }
}

export async function getTransportEmissionFromPublicTransit(
  distance: number
): Promise<any> {
  try {
    const response = await axios.get(
      "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit",
      {
        params: {
          distance: distance,
          type: "Taxi",
        },
        headers: {
          "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        },
      }
    );
    console.log("PublicTransit: ", response)
    return response.data.carbonEquivalent;
  } catch {}
}

export async function getElectricityEmission(
  countryCode: string,
  electricityConsumed: number
): Promise<number> {
  try {
    const requestData = {
      type: "electricity",
      electricity_unit: "mwh",
      electricity_value: electricityConsumed,
      country: countryCode,
      state: "fl",
    };

    const response = await axios.post(
      "https://www.carboninterface.com/api/v1/estimates",
      requestData,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CARBON_INTERFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
console.log("Electricity: ", response)
    return response.data.data.attributes.carbon_kg;
  } catch (error) {
    console.error("Error fetching electricity emission data:", error);
    throw error;
  }
}

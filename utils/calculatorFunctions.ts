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
          "x-rapidapi-key": process.env.RAPID_API_KEY,
        },
      }
    );
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
          "x-rapidapi-key": process.env.RAPID_API_KEY,
        },
      }
    );
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
          "x-rapidapi-key": process.env.RAPID_API_KEY,
        },
      }
    );
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
          "x-rapidapi-key": process.env.RAPID_API_KEY,
        },
      }
    );
    return response.data.carbonEquivalent;
  } catch {}
}

export async function getElectricityEmission(
  countryCode: string,
  electricityConsumed: number
): Promise<number> {
  try {
    return await fetchEmission(countryCode, electricityConsumed);
  } catch (error) {
    console.warn(`Country "${countryCode}" not supported. Falling back to "US".`);
    try {
      return await fetchEmission("US", electricityConsumed);
    } catch (fallbackError) {
      console.error("US fetch also failed. Returning 0.");
      return 0; // Prevents breaking calculations
    }
  }
}

async function fetchEmission(
  countryCode: string,
  electricityConsumed: number
): Promise<number> {
  const API_KEY = process.env.CARBON_INTERFACE_API_KEY; // ✅ Secure API Key
  const response = await axios.post(
    "https://www.carboninterface.com/api/v1/estimates",
    {
      type: "electricity",
      electricity_unit: "kwh",
      electricity_value: electricityConsumed,
      country: countryCode,
    },
    {
      headers: {
        Authorization: API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.data.attributes.carbon_kg;
}
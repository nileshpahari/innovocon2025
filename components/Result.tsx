"use client";
import { useEffect, useState } from "react";
import axios from "axios";


interface FootprintData {
  totalFootprint: number;
  particularFootprints: {
    transport: number;
    electricity: number;
    waste: number;
    meals: number;
  };
}

export default function ResultPage() {
  const [footprintData, setFootprintData] = useState<FootprintData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFootprintData() {
      try {
        const storedConsumption = localStorage.getItem("consumptionData");
        const storedCommonData = localStorage.getItem("commonData");

        if (!storedConsumption || !storedCommonData) {
          throw new Error(
            "Missing required data. Please re-enter your details."
          );
        }

        const userConsumption = JSON.parse(storedConsumption);
        const commonData = JSON.parse(storedCommonData);

        const queryParams = new URLSearchParams({
          electricity: userConsumption.electricityConsumed.toString(),
          transportFlight: userConsumption.transportConsumed.flight.toString(),
          transportCar: userConsumption.transportConsumed.car.toString(),
          transportPublic: userConsumption.transportConsumed.publicTransit.toString(),
          transportMotorbike: userConsumption.transportConsumed.motorbike.toString(),
          food: userConsumption.foodConsumed.toString(),
          waste: userConsumption.wasteGenerated.toString(),
          country: commonData.country,
          householdSize: commonData.householdSize.toString(),
        });

        // GET request
        const response = await axios.get<FootprintData>(
          `/api/result?${queryParams}`
        );
        setFootprintData(response.data);
      } catch (err) {
        console.log(err)
        setError("Error fetching carbon footprint data. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchFootprintData();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md min-w-2/4">
      <h1 className="text-xl font-bold text-center mb-6">
        🌍 Your Carbon Footprint Results
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : footprintData ? (
        <>
          <h2 className="text-lg font-bold text-green-400 mb-4">
            🌱 Total Annual Carbon Footprint:{" "}
            {footprintData.totalFootprint.toFixed(2)} kg CO₂
          </h2>

          <div className="space-y-3">
            <div className="bg-black/50 p-3 rounded-lg">
              🚗 <strong>Transport:</strong>{" "}
              {footprintData.particularFootprints.transport.toFixed(2)} kg CO₂
            </div>
            <div className="bg-black/50 p-3 rounded-lg">
              ⚡ <strong>Electricity:</strong>{" "}
              {footprintData.particularFootprints.electricity.toFixed(2)} kg CO₂
            </div>
            <div className="bg-black/50 p-3 rounded-lg">
              ♻️ <strong>Waste:</strong>{" "}
              {footprintData.particularFootprints.waste.toFixed(2)} kg CO₂
            </div>
            <div className="bg-black/50 p-3 rounded-lg">
              🍽️ <strong>Meals:</strong>{" "}
              {footprintData.particularFootprints.meals.toFixed(2)} kg CO₂
            </div>
          </div>
        </>
      ) : (
        <p className="text-center">No data available.</p>
      )}
    </div>
  );
}

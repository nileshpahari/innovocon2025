"use client";
import { useState } from "react";
export default function ConsumptionDetails({
  setComsumptionData,
}: {
  setComsumptionData: Function;
}) {
  const [electricity, setElectricity] = useState<number>(0);
  const [transport, setTransport] = useState<number>(0);
  const [food, setFood] = useState<number>(0);
  const [waste, setWaste] = useState<number>(0);
  function handleCalculate() {
    setComsumptionData({
      electricityCosumed: electricity,
      transportConsumed: transport,
      foodConsumed: food,
      wasteGenerated: waste,
    });
  }
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">YOUR CARBON FOOTPRINT</h1>

      <div className="mb-4">
        <h2 className="font-semibold">Electricity Consumption ⚡</h2>
        <label>Monthly electricity consumption (kWh)</label>
        <input
          onChange={(e) => setElectricity(parseInt(e.target.value))}
          type="number"
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
          min="0"
          value={electricity}
        />
        <input type="checkbox" id="electricityCheckbox" />
        <label htmlFor="electricityCheckbox">
          I am unsure of my monthly electricity consumption
        </label>
      </div>

      {/* Transport */}
      <div className="mb-4">
        <h2 className="font-semibold">Daily Transport 🚗</h2>
        <label>Daily commute distance (km)</label>
        <input
          onChange={(e) => setTransport(parseInt(e.target.value))}
          type="number"
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
          min="0"
          value={transport}
        />
        <input type="checkbox" id="electricity" />
        <label htmlFor="electricity">
          I am unsure of my monthly electricity consumption
        </label>
      </div>

      {/* Waste Generated */}
      <div className="mb-4">
        <h2 className="font-semibold">Waste Management 🍽️</h2>
        <label>Waste generated per week (kg)</label>
        <input
          onChange={(e) => setWaste(parseInt(e.target.value))}
          type="number"
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
          min="0"
          value={waste}
        />
        <input type="checkbox" id="electricity" />
        <label htmlFor="electricity">
          I am unsure of my monthly electricity consumption
        </label>
      </div>

      {/* Meals per day */}
      <div className="mb-4">
        <h2 className="font-semibold">Dietary Habits 🍽️</h2>
        <label>Number of meals per day</label>
        <input
          onChange={(e) => setFood(parseInt(e.target.value))}
          type="number"
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
          min="1"
          value={food}
        />
      </div>
      <button
        onClick={handleCalculate}
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Calculate
      </button>
    </div>
  );
}

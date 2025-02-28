"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import worldAverages from "@/data/worldAverages.json";

export default function ConsumptionDetails({
  setconsumptionData,
}: {
  setconsumptionData: Function;
}) {
  const [electricity, setElectricity] = useState<number>(0);
  const [motorbike, setMotorbike] = useState<number>(0);
  const [car, setCar] = useState<number>(0);
  const [publicTransit, setPublicTransit] = useState<number>(0);
  const [flight, setFlight] = useState<number>(0);
  const [food, setFood] = useState<number>(1);
  const [waste, setWaste] = useState<number>(0);
  const [mealType, setMealType] = useState<string>("mixed");

  const [unsureElectricity, setUnsureElectricity] = useState(false);
  const [unsureTransport, setUnsureTransport] = useState(false);
  const [unsureWaste, setUnsureWaste] = useState(false);

  const router = useRouter();
  function handleCalculate() {
    const data = {
      electricityConsumed: unsureElectricity
        ? worldAverages.electricityWorldAverage
        : electricity,
      transportConsumed: {
        motorbike: unsureTransport
          ? worldAverages.motorbikeWorldAverage
          : motorbike,
        car: unsureTransport ? worldAverages.carWorldAverage : car,
        publicTransit: unsureTransport
          ? worldAverages.publicTransitWorldAverage
          : publicTransit,
        flight: unsureTransport ? worldAverages.flightWorldAverage : flight,
      },
      foodConsumed: food,
      mealType: mealType,
      wasteGenerated: unsureWaste ? worldAverages.wasteWorldAverage : waste,
    };
    console.log(data);
    setconsumptionData(data);
    router.push("/result");
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-6 text-center">
        PLEASE ENTER THE DETAILS BELOW
      </h1>

      <div className="mb-4">
        <h2 className="font-semibold">⚡ Electricity Consumption</h2>
        <label>Monthly electricity consumption (kWh)</label>
        <input
          type="number"
          min="0"
          value={unsureElectricity ? "" : electricity}
          onChange={(e) => setElectricity(parseInt(e.target.value) || 0)}
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
          disabled={unsureElectricity}
        />
        <label className="block mt-2">
          <input
            type="checkbox"
            checked={unsureElectricity}
            onChange={() => setUnsureElectricity(!unsureElectricity)}
            className="mr-2"
          />
          I am unsure of my monthly electricity consumption
        </label>
      </div>

      {/*Transport */}
      <div className="mb-4">
        <h2 className="font-semibold">🚗 Monthly Transport</h2>
        <label>Distance travelled per month (km)</label>

        <div className="mt-2">
          <label className="block">🏍️ By Motorbike</label>
          <input
            type="number"
            min="0"
            value={unsureTransport ? "" : motorbike}
            onChange={(e) => setMotorbike(parseInt(e.target.value) || 0)}
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            disabled={unsureTransport}
          />
        </div>

        <div className="mt-2">
          <label className="block">🚗 By Car</label>
          <input
            type="number"
            min="0"
            value={unsureTransport ? "" : car}
            onChange={(e) => setCar(parseInt(e.target.value) || 0)}
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            disabled={unsureTransport}
          />
        </div>

        <div className="mt-2">
          <label className="block">🚌 By Public Transit</label>
          <input
            type="number"
            min="0"
            value={unsureTransport ? "" : publicTransit}
            onChange={(e) => setPublicTransit(parseInt(e.target.value) || 0)}
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            disabled={unsureTransport}
          />
        </div>

        <div className="mt-2">
          <label className="block">✈️ By Flight</label>
          <input
            type="number"
            min="0"
            value={unsureTransport ? "" : flight}
            onChange={(e) => setFlight(parseInt(e.target.value) || 0)}
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            disabled={unsureTransport}
          />
        </div>

        <label className="block mt-2">
          <input
            type="checkbox"
            checked={unsureTransport}
            onChange={() => setUnsureTransport(!unsureTransport)}
            className="mr-2"
          />
          I am unsure of my monthly commute distance
        </label>
      </div>

      {/* Waste Generated */}
      <div className="mb-4">
        <h2 className="font-semibold">♻️ Waste Management</h2>
        <label>Waste generated per week (kg)</label>
        <input
          type="number"
          min="0"
          value={unsureWaste ? "" : waste}
          onChange={(e) => setWaste(parseInt(e.target.value) || 0)}
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
          disabled={unsureWaste}
        />
        <label className="block mt-2">
          <input
            type="checkbox"
            checked={unsureWaste}
            onChange={() => setUnsureWaste(!unsureWaste)}
            className="mr-2"
          />
          I am unsure of my weekly waste generation
        </label>
      </div>

      {/* Meals per day */}
      <div className="mb-4">
        <h2 className="font-semibold">🍽️ Dietary Habits</h2>
        <label>Number of meals per day</label>
        <input
          type="number"
          min="1"
          value={food}
          onChange={(e) => setFood(parseInt(e.target.value) || 1)}
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
        />
      </div>
      {/* Meal preference */}
      <div className="mb-4">
        <h2 className="font-semibold">🥗 Meal Preference</h2>
        <label>What type of meals do you generally eat?</label>
        <select
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
        >
          <option value="veg">Vegetarian</option>
          <option value="nonVeg">Non-Vegetarian</option>
          <option value="mixed">Mixed</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleCalculate}
        className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all"
      >
        Calculate
      </button>
    </div>
  );
}

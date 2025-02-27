// "use client";
// import { useState } from "react";
// export default function ConsumptionDetails({
//   setconsumptionData,
// }: {
//   setconsumptionData: Function;
// }) {
//   const [electricity, setElectricity] = useState<number>(0);
//   const [transport, setTransport] = useState<number>(0);
//   const [food, setFood] = useState<number>(0);
//   const [waste, setWaste] = useState<number>(0);
//   function handleCalculate() {
//     setconsumptionData({
//       electricityCosumed: electricity,
//       transportConsumed: transport,
//       foodConsumed: food,
//       wasteGenerated: waste,
//     });
//   }
//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-4">
//         PLEASE ENTER THE DETAILS MENTIONED BELOW
//       </h1>

//       {/* Electricity */}
//       <div className="mb-4">
//         <h2 className="font-semibold">Electricity Consumption ⚡</h2>
//         <label>Monthly electricity consumption (kWh)</label>
//         <input
//           onChange={(e) => setElectricity(parseInt(e.target.value))}
//           type="number"
//           className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
//           min="0"
//           value={electricity}
//         />
//         <input type="checkbox" id="electricityCheckbox" />
//         <label htmlFor="electricityCheckbox">
//           I am unsure of my monthly electricity consumption
//         </label>
//       </div>

//       {/* Transport */}
//       <div className="mb-4">
//         <h2 className="font-semibold">Daily Transport 🚗</h2>
//         <label>Daily commute distance (km)</label>
//         <input
//           onChange={(e) => setTransport(parseInt(e.target.value))}
//           type="number"
//           className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
//           min="0"
//           value={transport}
//         />
//         <input type="checkbox" id="electricity" />
//         <label htmlFor="electricity">I am unsure of my daily commute distance</label>
//       </div>

//       {/* Waste Generated */}
//       <div className="mb-4">
//         <h2 className="font-semibold">Waste Management 🍽️</h2>
//         <label>Waste generated per week (kg)</label>
//         <input
//           onChange={(e) => setWaste(parseInt(e.target.value))}
//           type="number"
//           className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
//           min="0"
//           value={waste}
//         />
//         <input type="checkbox" id="electricity" />
//         <label htmlFor="electricity">
//         I am unsure of my weekly waste generation
//         </label>
//       </div>

//       {/* Meals per day */}
//       <div className="mb-4">
//         <h2 className="font-semibold">Dietary Habits 🍽️</h2>
//         <label>Number of meals per day</label>
//         <input
//           onChange={(e) => setFood(parseInt(e.target.value))}
//           type="number"
//           className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
//           min="1"
//           value={food}
//         />
//       </div>
//       <button
//         onClick={handleCalculate}
//         className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//       >
//         Calculate
//       </button>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

  const [unsureElectricity, setUnsureElectricity] = useState(false);
  const [unsureTransport, setUnsureTransport] = useState(false);
  const [unsureWaste, setUnsureWaste] = useState(false);

  const router = useRouter();
  function handleCalculate() {
    const data = {
      electricityConsumed: unsureElectricity ? "average" : electricity,
      transportConsumed: {
        motorbike: unsureTransport ? "average" : motorbike,
        car: unsureTransport ? "average" : car,
        publicTransit: unsureTransport ? "average" : publicTransit,
        flight: unsureTransport ? "average" : flight,
      },
      foodConsumed: food,
      wasteGenerated: unsureWaste ? "average" : waste,
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
"use client";

import { useState } from "react";
import countries from "@/data/countries.json";

export default function CommonDetails({
  setShowForm,
  setCommonData,
}: {
  setShowForm: (value: boolean) => void;
  setCommonData: (data: { country: string; householdSize: number }) => void;
}) {
  const [country, setCountry] = useState<string>("");
  const [householdSize, setHouseholdSize] = useState<number>(1);

  function handleProceed() {
    if (!country) {
      alert("Please select a country.");
      return;
    }
    setCommonData({ country, householdSize });
    setShowForm(true);
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">🏡 About Your Household</h1>

      <div className="mb-4">
        <label htmlFor="country" className="block mb-2 text-gray-300">
          🌍 Country of Residence
        </label>
        <select
          id="country"
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select Country</option>
          {countries.map(({ name, code }) => (
            <option key={code} value={code}>
              {name} ({code})
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="household-size" className="block mb-2 text-gray-300">
          👨‍👩‍👧 Number of People in Your Household
        </label>
        <input
          id="household-size"
          type="number"
          min="1"
          value={householdSize}
          onChange={(e) => setHouseholdSize(Math.max(1, parseInt(e.target.value)))}
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button
        onClick={handleProceed}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-all"
      >
        Proceed ➡️
      </button>
    </div>
  );
}

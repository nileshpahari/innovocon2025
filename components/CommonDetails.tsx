"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function CommonDetails({
  setShowForm,
  setCommonData,
}: {
  setShowForm: Function;
  setCommonData: Function;
}) {
  const [countries, setCountries] = useState<string[]>([]);
  const [country, setCountry] = useState<string>("");
  const [householdSize, setHouseholdSize] = useState<number>(1);

  function handleProceed() {
    setShowForm(true);
    setCommonData({ country, householdSize });
  }
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        const countryList = res.data.map((country: any) => country.name.common);
        setCountries(countryList.sort());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(country);
  console.log(householdSize);
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">ABOUT YOUR HOUSEHOLD</h1>

      <div className="mb-4">
        <label className="block mb-1">Country of Residence</label>
        <select
          onChange={(e) => setCountry(e.target.value)}
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
          value={country}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Number of People in Your Household</label>
        <input
          onChange={(e) => setHouseholdSize(parseInt(e.target.value))}
          type="number"
          value={householdSize}
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-2 focus:ring-green-500"
          min="1"
        />
      </div>
      <button
        onClick={handleProceed}
        className="rounded bg-slate-900 w-full px-4 py-2"
      >
        Proceed
      </button>
    </div>
  );
}

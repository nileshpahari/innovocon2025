"use client";
import CommonDetails from "./CommonDetails";
import ConsumptionDetails from "./ConsumptionDetails";
import { useEffect, useState } from "react";
export default function FootprintForm() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [commonData, setCommonData] = useState<{
    country: string;
    householdSize: number;
  }>({ country: "India", householdSize: 1 });

  const [consumptionData, setConsumptionData] = useState<{
    electricityCosumed: number;
    transportConsumed: number;
    foodConsumed: number;
    wasteGenerated: number;
  }>({
    electricityCosumed: 0,
    transportConsumed: 0,
    foodConsumed: 0,
    wasteGenerated: 0,
  });
  return (
    <div>
      {!showForm ? (
        <CommonDetails setShowForm={setShowForm} setCommonData={setCommonData} />
      ) : (
        <ConsumptionDetails setComsumptionData={setConsumptionData} />
      )}
    </div>
  );
}

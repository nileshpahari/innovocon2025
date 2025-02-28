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
    electricityConsumed: number;
    transportConsumed: {
      motorbike: number;
      car: number;
      publicTransit: number;
      flight: number;
    };
    foodConsumed: number;
    mealType: string;
    wasteGenerated: number;
  }>({
    electricityConsumed: 0,
    transportConsumed: {
      motorbike: 0,
      car: 0,
      publicTransit: 0,
      flight: 0,
    },
    foodConsumed: 0,
    mealType: "mixed",
    wasteGenerated: 0,
  });
  useEffect(() => {
    localStorage.setItem("consumptionData", JSON.stringify(consumptionData));
    console.log("Consumption data changed:", consumptionData);
    localStorage.setItem("commonData", JSON.stringify(commonData));
    console.log("Common data changed:", commonData);
  }, [commonData, consumptionData]);
  return (
    <div>
      {!showForm ? (
        <CommonDetails
          setShowForm={setShowForm}
          setCommonData={setCommonData}
        />
      ) : (
        <ConsumptionDetails setconsumptionData={setConsumptionData} />
      )}
    </div>
  );
}

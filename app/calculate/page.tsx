import { CalculationForm } from "@/components/index";

export default function CalculationPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center">
        Carbon Footprint Calculator
      </h1>
      <p className="text-gray-500 text-center mt-2">
        Estimate your carbon footprint based on your daily activities.
      </p>
      <CalculationForm />
    </div>
  );
}

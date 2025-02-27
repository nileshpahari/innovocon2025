"use client";

export default function MoreInfo() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md mt-8">
      <h1 className="text-3xl font-bold text-center text-green-400 mb-6">🌍 How We Calculate Your Footprint</h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-300">Understanding Your Carbon Footprint</h2>
        <p className="mt-2 text-gray-300">
          Your carbon footprint is the **total amount of CO₂** you generate through daily activities like 
          **transportation, electricity use, food consumption, and waste production**. 
          We estimate this using global **scientific models and average emission factors**.
        </p>
      </section>

      {/* Transport */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-300">🚗 Transport</h2>
        <p className="mt-2 text-gray-300">
          Vehicles burn **fuel**, releasing CO₂ into the air. Different modes of transport 
          have **different emission rates**:
        </p>
        <ul className="list-disc pl-5 text-gray-300">
          <li>✈️ Flights: Highest emissions (e.g., **200g CO₂ per km**)</li>
          <li>🚗 Cars: Varies by fuel type (**100-200g CO₂ per km**)</li>
          <li>🛵 Motorbikes: **Lower than cars**, but still emits CO₂</li>
          <li>🚆 Public Transit: **Lower footprint per passenger**</li>
        </ul>
      </section>

      {/* Electricity */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-300">⚡ Electricity</h2>
        <p className="mt-2 text-gray-300">
          The amount of CO₂ your **home electricity** produces depends on how your country 
          generates power. For example:
        </p>
        <ul className="list-disc pl-5 text-gray-300">
          <li>🛑 **Coal-based electricity**: **Highest emissions** (800g CO₂ per kWh)</li>
          <li>🔋 **Natural gas electricity**: **Medium emissions** (400g CO₂ per kWh)</li>
          <li>🌿 **Renewable energy (solar, wind, hydro)**: **Near zero** emissions</li>
        </ul>
      </section>

      {/* Food Consumption */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-300">🍽️ Food</h2>
        <p className="mt-2 text-gray-300">
          The type of food you eat impacts your carbon footprint:
        </p>
        <ul className="list-disc pl-5 text-gray-300">
          <li>🥩 **Beef & lamb**: Highest emissions (**25kg CO₂ per kg** of meat)</li>
          <li>🐔 **Chicken & fish**: Moderate emissions (**5kg CO₂ per kg**)</li>
          <li>🥦 **Vegetarian meals**: Lower emissions (**2-3kg CO₂ per meal**)</li>
        </ul>
      </section>

      {/* Waste Management */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-300">♻️ Waste</h2>
        <p className="mt-2 text-gray-300">
          When waste **decomposes or burns**, it releases greenhouse gases like **methane**.
          Recycling and reducing waste can **significantly lower emissions**.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-xl font-semibold text-green-300">Ready to Calculate Your Footprint?</h2>
        <p className="mt-2 text-gray-300">
          Now that you understand **how your emissions are calculated**, try our carbon footprint 
          calculator and start making a difference!
        </p>
      </section>
    </div>
  );
}

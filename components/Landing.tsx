"use client";
import { useRouter } from "next/navigation";
export default function Landing() {
  const router = useRouter();
  return (
    <div
      className="relative h-screen w-full flex flex-col items-center justify-center text-white text-center"
      style={{
        backgroundImage: "url('/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-6xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Small Actions, Big Impact 🌍
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Calculate your carbon footprint and take steps towards a greener
          future.
        </p>

        <button
          onClick={() => router.push("/calculate")}
          className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300"
        >
          Start Calculating
        </button>

        <div className="mt-10 bg-black/50 p-6 rounded-lg shadow-md text-left">
          <h2 className="text-2xl font-semibold text-green-400">
            Did You Know? 🌱
          </h2>
          <ul className="mt-3 text-gray-300 space-y-2">
            <li>🔥 The average person emits **4.8 tons of CO₂ per year**.</li>
            <li>
              🚗 A single car trip of 10 km emits about **2.3 kg of CO₂**.
            </li>
            <li>
              💡 Switching to renewable energy can cut your footprint by
              **40%**.
            </li>
            <li>
              🌱 Eating **plant-based** meals can reduce emissions by **50%**.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

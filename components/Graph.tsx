"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface GraphProps {
  data: { name: string; CO2: number }[];
}

export default function Graph({ data }: GraphProps) {
  return (
    <div className="mt-6 bg-black/50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-green-300 mb-2">📊 CO₂ Footprint Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="CO2" fill="#22c55e" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

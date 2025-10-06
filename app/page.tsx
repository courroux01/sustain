"use client";
import { useState } from "react";
import { computeCO2 } from "@/lib/footprint";

export default function HomePage() {
  const [km, setKm] = useState(10);
  const result = computeCO2({ type: "TRANSPORT", amount: km, unit: "km" });

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">EcoTracker</h1>
      <p className="mb-2">Test your car trip footprint:</p>
      <input
        type="number"
        value={km}
        onChange={(e) => setKm(Number(e.target.value))}
        className="border px-2 py-1 rounded mb-3"
      />
      <p>
        Estimated CO₂e:{" "}
        <span className="font-semibold">{result.co2Kg.toFixed(2)} kg</span>
      </p>
    </main>
  );
}

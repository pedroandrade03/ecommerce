import * as React from "react";
import Image from "next/image";

export default function HomeSlider() {
  return (
    <div className="w-full bg-green-100 flex items-center justify-between p-8 rounded-3xl h-[538px]">
      <div className="max-w-md">
        <h1 className="text-7xl font-bold text-gray-800">Fresh Vegetables</h1>
        <h2 className="text-4xl font-semibold text-gray-800">Big discount</h2>
        <p className="text-xl text-gray-600 mt-4">
          Save up to 50% off on your first order
        </p>
        <button className="bg-green-500 text-white p-3 rounded-r-lg hover:bg-green-600 transition">
          Comprar Agora
        </button>
      </div>
    </div>
  );
}

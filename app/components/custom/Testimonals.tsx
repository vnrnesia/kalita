"use client";

import { MarqueeDemo } from "./MarqueeDemo";
import { ArrowRight } from "lucide-react";


export default function Testimonials() {
  return (
    <div className="bg-white relative flex flex-col md:flex-row w-full justify-center mx-auto items-center px-8 py-16  dark:bg-black">
      {/* Arka plan pattern */}
  

      {/* Sol taraf */}
      <div className="max-w-md space-y-6">
        <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm dark:bg-gray-800 dark:text-gray-200">
          Testimonials
        </button>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          What our client say <br />
          <span className="bg-yellow-200 px-1">Working with us</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          See how we’ve helped businesses like yours reach new heights.
        </p>

        <button className="flex items-center gap-2 text-orange-500 font-medium">
          See More <ArrowRight size={20} />
        </button>
      </div>

      {/* Sağ taraf */}
      <div className="flex-1 max-w-3xl">
        <MarqueeDemo />
      </div>
    </div>
  );
}

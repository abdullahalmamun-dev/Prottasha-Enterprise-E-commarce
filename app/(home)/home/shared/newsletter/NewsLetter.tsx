"use client";

import Image from "next/image";
import news1 from "../../../../../src/Assets/news1.png";
import news2 from "../../../../../src/Assets/news2.png";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

export default function NewsLetter() {
  return (
    <div className={`max-w-screen-xl mx-auto md:py-20 ${jost.className} py-5`}>
      <div className="md:grid grid-cols-3 items-center">
        <div className="hidden md:flex justify-end">
          <Image
            src={news1} // Replace with the path to your Google icon
            alt="Google Icon"
            width={100}
            height={100}
            className="mr-2 w-auto h-96"
          />
        </div>
        <div>
          <h1 className="text-[#131118] text-center font-bold text-2xl md:text-4xl">
            Subscribe To Our Newsletter
          </h1>
          <div className="flex justify-center py-4 md:py-10 text-xs">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="info@prottashaenterprise.shop"
              className="mt-1 block w-2/3 text-center px-3 md:px-4 py-2 border bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="w-2/3 justify-center flex mx-auto">
            <button
              type="submit"
              className="w-full bg-[#001A66] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium shadow-md"
            >
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="hidden md:flex">
          <Image
            src={news2} // Replace with the path to your Google icon
            alt="Google Icon"
            width={100}
            height={100}
            className="mr-2 w-auto h-96"
          />
        </div>
      </div>
    </div>
  );
}

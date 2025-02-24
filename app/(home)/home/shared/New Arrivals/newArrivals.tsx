"use client";

import { Button } from "@/components/ui/button";
import { Poppins, Volkhov } from "next/font/google";
import background from "../../../../../src/Assets/newArrivalsBackground.png"; // Import background image
import Image from "next/image";
import card1 from "../../../../../src/Assets/card1.png";
import ArrivalCard from "./arrivalCard";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function NewArrivals() {
  return (
    <div
      className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl pb-20"
      style={{ backgroundImage: `url(${background.src})` }} // Apply background image through inline styles
    >
      <div className="">
        <h1
          className={`${volkhov.className} text-[#484848] text-5xl text-center pt-12`}
        >
          New Arrivals
        </h1>
        <p
          className={`${poppins.className} text-[#8A8A8A] text-xl text-center py-12`}
        >
          Shop Stylish Men&apos;s Punjabi & Elegant Women&apos;s Burka/Abaya –
          Enjoy Exclusive Discounts
        </p>
        <div className="flex justify-center gap-10">
          <Button className="w-44 text-center py-6 text-xl flex rounded-[10px] bg-[#001A66] text-white hover:text-[#8A8A8A] font-medium hover:bg-white">
            Men&apos;s
          </Button>
          <Button className="w-44 text-center flex py-6 text-xl rounded-[10px] text-white bg-[#001A66] hover:text-[#8A8A8A] font-medium hover:bg-white">
            Women&apos;s
          </Button>
        </div>
        <div className=" grid-cols-1 grid md:grid-cols-3 pt-10 md:gap-10 gap-5">
          <ArrivalCard></ArrivalCard>
          <ArrivalCard></ArrivalCard>
          <ArrivalCard></ArrivalCard>
          <ArrivalCard></ArrivalCard>
          <ArrivalCard></ArrivalCard>
          <ArrivalCard></ArrivalCard>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="w-44 mt-10 text-center py-6 text-xl flex rounded-[10px] bg-[#001A66] text-white font-medium hover:bg-[#00258C]">
          See More
        </Button>
      </div>
    </div>
  );
}

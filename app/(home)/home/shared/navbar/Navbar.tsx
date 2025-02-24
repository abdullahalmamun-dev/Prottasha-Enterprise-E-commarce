"use client";

import Image from "next/image";
import logo from "../../../../logo.jpg";
import Link from "next/link";
import { Jost, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
const jost = Jost({
  subsets: ["latin"],
  weight: ["400"],
});

export function Navbar() {
  return (
    <>
      <div className="bg-white mx-auto flex justify-between max-w-screen-xl my-5">
        <div className="flex items-center" >
          <Image
            className="w-8 h-8"
            alt="Prottasha Enterprise"
            width={500}
            height={300}
            src={logo}
          ></Image>
          <div className={jost.className}>
            <h1 className="text-[#001A66] font-bold text-4xl ">PROTTASHA</h1>
          </div>
        </div>
        <div className={poppins.className}>
          <div className="text-[#484848] text-md font-normal flex gap-16 items-center">
            <Link href="/">Home</Link>
            <Link href="/">Deals</Link>
            <Link href="/">New Arrivals</Link>
            <Link href="/">Sign In</Link>
            <button className="p-3 flex-shrink-0 rounded-[10px] bg-[#001A66] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] text-white font-medium transition-colors hover:bg-[#00258C] focus:ring-2 focus:ring-blue-300">
              <Link href="/">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
      <h1>Banner</h1>
    </>
  );
}

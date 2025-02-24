"use client";

import Image from "next/image";
import banner1 from "../../../../../src/Assets/banner1.png";
import banner2 from "../../../../../src/Assets/banner2.png";
import banner3 from "../../../../../src/Assets/banner3.png";
import banner4 from "../../../../../src/Assets/banner4.png";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500","700","900"],
});
export function Banner() {
  return (
    <>
      <div className="grid grid-cols-3 px-4 sm:px-6 lg:px-8 my-20 gap-8 max-w-screen-xl mx-auto">
        <div className="bg-[#9babff] bg-opacity-50 py-20 rounded-xl">
          <Image
            alt="banner image"
            height={500}
            width={500}
            src={banner1}
          ></Image>
        </div>
        <div>
          <div className="bg-[#FFFACC] rounded-xl">
            <Image
              className="px-12"
              alt="banner image"
              height={500}
              width={500}
              src={banner2}
            ></Image>
          </div>
          <h1 className={`${poppins.className} text-[#484848] text-center text-7xl tracking-wide font-bold pt-10`}>ULTIMATE</h1>
          <h2  className={`${poppins.className} text-[#484848] text-center text-9xl font-black`}>SALE</h2>
          <p className={`${poppins.className} text-[#484848] text-center text-xl tracking-wider pb-5`}>NEW COLLECTION</p>
          <Link
            href="/signup"
            className="block text-center w-1/2 mx-auto mb-10 py-3 rounded-[10px] bg-[#001A66] text-white font-medium hover:bg-[#00258C]"
          >
            SHOP NOW
          </Link>
          <div className="bg-[#FFFACC] rounded-xl">
            <Image
              alt="banner image"
              height={500}
              width={500}
              src={banner3}
            ></Image>
          </div>
        </div>
        <div className="bg-[#9babff] bg-opacity-50 py-20 rounded-xl">
          <Image
            alt="banner image"
            height={500}
            width={500}
            src={banner4}
          ></Image>
        </div>
      </div>
    </>
  );
}

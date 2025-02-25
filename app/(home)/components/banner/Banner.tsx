"use client";

import Image from "next/image";
import banner1 from "../../../../src/Assets/banner1.png";
import banner2 from "../../../../src/Assets/banner2.png";
import banner3 from "../../../../src/Assets/banner3.png";
import banner4 from "../../../../src/Assets/banner4.png";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

export function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-4 sm:px-6 lg:px-8 my-10 sm:my-20 gap-4 sm:gap-8 max-w-screen-xl mx-auto">
      <div className="bg-[#9babff] bg-opacity-50 py-10 md:py-20 rounded-xl order-1 md:order-none">
        <Image
          alt="banner image"
          height={500}
          width={500}
          src={banner1}
          className="w-full h-auto object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="order-3 md:order-none space-y-6 sm:space-y-8">
        <div className="bg-[#FFFACC] rounded-xl aspect-square md:aspect-auto flex items-center">
          <Image
            className="px-4 sm:px-12 w-full h-auto"
            alt="banner image"
            height={500}
            width={500}
            src={banner2}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className={`${poppins.className} text-[#484848] text-4xl sm:text-5xl md:text-7xl tracking-wide font-bold`}>
            ULTIMATE
          </h1>
          <h2 className={`${poppins.className} text-[#484848] text-6xl sm:text-7xl md:text-9xl font-black`}>
            SALE
          </h2>
          <p className={`${poppins.className} text-[#484848] text-lg sm:text-xl tracking-wider`}>
            NEW COLLECTION
          </p>
        </div>

        <Link
          href="/signup"
          className="block text-center w-full md:w-1/2 mx-auto py-2 sm:py-3 rounded-[10px] bg-[#001A66] text-white font-medium hover:bg-[#00258C] transition-colors duration-200"
        >
          SHOP NOW
        </Link>

        <div className="bg-[#FFFACC] rounded-xl aspect-square md:aspect-auto flex items-center">
          <Image
            className="w-full h-auto "
            alt="banner image"
            height={500}
            width={500}
            src={banner3}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="bg-[#9babff] bg-opacity-50 py-10 md:py-20 rounded-xl order-2 md:order-none">
        <Image
          alt="banner image"
          height={500}
          width={500}
          src={banner4}
          className="w-full h-auto object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

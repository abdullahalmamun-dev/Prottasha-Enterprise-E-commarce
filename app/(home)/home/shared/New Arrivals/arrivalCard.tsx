"use client";

import Image from "next/image";
import card1 from "../../../../../src/Assets/card1.png";


export default function ArrivalCard() {
  return <div className="">
             <div className="bg-white p-4 rounded-[10px]">
            <Image
              className="w-full h-auto p-4"
              alt="banner image"
              height={500}
              width={500}
              src={card1}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="flex p-4 justify-between">
              <p className="text-[#484848] font-medium">
                Ethereal Pleats Burka
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="95"
                height="19"
                viewBox="0 0 95 19"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z"
                  fill="#FCA120"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.6646 7.12771L28.5 0L26.3354 7.12771H19L24.9348 11.742L22.7321 19L28.5 14.5146L34.2679 19L32.0652 11.742L38 7.12771H30.6646Z"
                  fill="#FCA120"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M49.6646 7.12771L47.5 0L45.3354 7.12771H38L43.9348 11.742L41.7321 19L47.5 14.5146L53.2679 19L51.0652 11.742L57 7.12771H49.6646Z"
                  fill="#FCA120"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M68.6646 7.12771L66.5 0L64.3354 7.12771H57L62.9348 11.742L60.7321 19L66.5 14.5146L72.2679 19L70.0652 11.742L76 7.12771H68.6646Z"
                  fill="#FCA120"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M87.6646 7.12771L85.5 0L83.3354 7.12771H76L81.9348 11.742L79.7321 19L85.5 14.5146L91.2679 19L89.0652 11.742L95 7.12771H87.6646Z"
                  fill="#FCA120"
                />
              </svg>
            </div>
            <p className="text-[#484848] text-xs px-4 py-4">(4.1k) Customer Reviews</p>
            <div className="flex justify-between items-center px-4 pb-5">
                <p className="text-[#484848] text-2xl">Tk.995.50</p>
                <p className="text-[#FF4646]">Almost Sold Out</p>
            </div>
          </div>
  </div>;
}

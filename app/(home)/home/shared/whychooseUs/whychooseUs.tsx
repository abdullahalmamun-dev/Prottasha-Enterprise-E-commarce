"use client";

import Image from "next/image";
import background from "../../../../../src/Assets/whychooseus.png";
import background2 from "../../../../../src/Assets/whychooseus1.png";

import icon1 from "../../../../../src/Assets/icon1.svg";
import icon2 from "../../../../../src/Assets/icon2.svg";
import icon3 from "../../../../../src/Assets/icon3.svg";
import icon4 from "../../../../../src/Assets/icon4.png";
import { Poppins, Volkhov } from "next/font/google";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function WhyChooseUs() {
  return (
    <div>
      <div
        className="mx-auto max-w-screen-xl pb-20 h-[500px] p-4 my-32 hidden md:block"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <h1
          className={`${volkhov.className} text-[#484848] md:pb-36 text-4xl text-center sm:text-5xl md:text-5xl tracking-wide font-bold`}
        >
          WHY CHOOSE US?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 pl-20 ">
          <div className="flex gap-3 bg-white rounded-[14px] p-2 items-center">
            <div>
              <Image
                className="w-10 h-auto "
                alt="banner image"
                height={100}
                width={100}
                src={icon1}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h1
                className={`${poppins.className} text-[#484848] text-md tracking-wide font-bold`}
              >
                High Quality
              </h1>
              <p
                className={`${poppins.className} text-[#484848] text-xs tracking-wide font-extralight`}
              >
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex gap-3 bg-white rounded-[14px] p-2 items-center ">
            <div>
              <Image
                className="w-10 h-auto "
                alt="banner image"
                height={100}
                width={100}
                src={icon2}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h1
                className={`${poppins.className} text-[#484848] text-md tracking-wide font-bold`}
              >
                High Quality
              </h1>
              <p
                className={`${poppins.className} text-[#484848] text-xs tracking-wide font-extralight`}
              >
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex gap-3 bg-white rounded-[14px] p-2 items-center">
            <div>
              <Image
                className="w-10 h-auto "
                alt="banner image"
                height={100}
                width={100}
                src={icon3}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h1
                className={`${poppins.className} text-[#484848] text-md tracking-wide font-bold`}
              >
                High Quality
              </h1>
              <p
                className={`${poppins.className} text-[#484848] text-xs tracking-wide font-extralight`}
              >
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex gap-3 bg-white rounded-[14px] p-2 items-center">
            <div>
              <Image
                className="w-10 h-auto "
                alt="banner image"
                height={100}
                width={100}
                src={icon4}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h1
                className={`${poppins.className} text-[#484848] text-md tracking-wide font-bold`}
              >
                High Quality
              </h1>
              <p
                className={`${poppins.className} text-[#484848] text-xs tracking-wide font-extralight`}
              >
                crafted from top materials
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${background2.src})` }}
        className=""
      >
        <div>
          <h1 className={`${volkhov.className} text-[#484848] text-2xl text-center py-20`}>WHY CHOOSE US?</h1>
        </div>
<div>
<div>
          <div className="flex bg-white justify-center mx-8 gap-2 p-2 rounded-[14px]">
            <div>
              <Image
                className="w-10 h-auto "
                alt="banner image"
                height={100}
                width={100}
                src={icon1}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
                <h1 className={`${volkhov.className} text-[#484848] text-sm text-center`}>High Quality</h1>
                <p className={`${volkhov.className} text-[#484848] text-xs text-center`}>crafted from top materials</p>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>

</div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import banner1 from "../../../../../src/Assets/banner1.png";
import banner2 from "../../../../../src/Assets/banner2.png";
import banner3 from "../../../../../src/Assets/banner3.png";
import banner4 from "../../../../../src/Assets/banner4.png";

export function Banner() {
  return (
    <>
      <div className="grid grid-cols-3">
        <div>
          <Image
            alt="banner image"
            height={500}
            width={500}
            src={banner1}
          ></Image>
        </div>
        <div>
        <Image
            alt="banner image"
            height={500}
            width={500}
            src={banner2}
          ></Image>
          <h1>ULTIMATE</h1>
          <h2>SALE</h2>
          <p>NEW COLLECTION</p>
          
          <Image
            alt="banner image"
            height={500}
            width={500}
            src={banner3}
          ></Image>
        </div>
        <div>
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

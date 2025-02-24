"use client";

import { Jost, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../logo.jpg";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
const jost = Jost({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Footer() {
  const navLinks = [
    { name: "Support Center", href: "/" },
    { name: "Contact", href: "/deals" },
    { name: "Blog", href: "/new-arrivals" },
    { name: "FAQs", href: "/signin" },
  ];

  return (
    <div className="h-full md:p-4 bg-white">
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 py-10`}
      >
        <div className="mx-auto md:px-4  md:max-w-screen-xl">
          <div className="grid  md:flex justify-center md:justify-between md:items-center md:h-16">
            <div className="flex items-center">
              <Image
                alt="Prottasha Enterprise"
                width={32}
                height={32}
                src={logo}
                className="md:w-8 md:h-8"
              />
              <div className={jost.className}>
                <h1 className="ml-2 text-[#001A66]  font-bold text-xl md:text-4xl">
                  PROTTASHA
                </h1>
              </div>
            </div>

            <div
              className={`${poppins.className} grid grid-cols-2 pt-5 gap-5 md:flex justify-center md:pt-0 md:items-center  md:space-x-8`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#484848] hover:text-[#001A66] transition-colors duration-200 md:text-md font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <hr className="pb-5 w-2/3 md:py-5 md:w-1/2 mx-auto"/>
      <div className={`text-center text-[#484848] ${poppins.className}`}>
        <Link href={"https://allinfozone.tech"}>
          <h1>Copyright © 2025 | Allinfozone IT Solutions. All Rights Reserved</h1>
        </Link>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../logo.jpg";
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
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Deals", href: "/deals" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Sign In", href: "/signin" },
  ];

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              alt="Prottasha Enterprise"
              width={32}
              height={32}
              src={logo}
              className="w-8 h-8"
            />
            <div className={jost.className}>
              <h1 className="ml-2 text-[#001A66] font-bold text-4xl">PROTTASHA</h1>
            </div>
          </div>

          <div className={`${poppins.className} hidden md:flex items-center space-x-8`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#484848] hover:text-[#001A66] transition-colors duration-200 text-md font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/signup"
              className="px-6 py-3 flex-shrink-0 rounded-[10px] bg-[#001A66] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] text-white font-medium transition-colors hover:bg-[#00258C] focus:ring-2 focus:ring-blue-300"
            >
              Sign Up
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#001A66] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-[#484848] hover:bg-gray-50 hover:text-[#001A66]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/signup"
                className="block w-full text-center px-6 py-3 rounded-[10px] bg-[#001A66] text-white font-medium hover:bg-[#00258C]"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import card1 from "../../../../../src/Assets/card1.png";
import { Poppins, Volkhov } from "next/font/google";


const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function DealsoftheMonth() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [currentSlide, setCurrentSlide] = useState(0); // Track the starting index of visible slides
  const slides = [
    {
      src: card1,
      alt: "Woman in blue dress",
      label: "01 — Spring Sale",
      discount: "30% OFF",
    },
    {
      src: card1,
      alt: "Woman in purple dress",
    },
    {
      src: card1,
      alt: "Woman in maroon dress",
    },
    {
      src: card1,
      alt: "Duplicate blue dress",
      label: "02 — Summer Sale",
      discount: "40% OFF",
    },
    {
      src: card1,
      alt: "Duplicate purple dress",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/TdYVkDyZhgxzLvcTNOMYEo_krz_vWiaCAAZeyA3qvUs.jpg",
      alt: "Duplicate maroon dress",
    },
  ];

  const targetTime = new Date("2025-02-27T02:58:00+06:00");

  const calculateTimeLeft = () => {
    const currentTime = new Date();
    const difference = targetTime.getTime() - currentTime.getTime();

    if (difference > 0) {
      return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle left arrow click
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? Math.max(0, slides.length - 3) : prevSlide - 3
    );
  };

  // Handle right arrow click
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide + 3 >= slides.length ? 0 : prevSlide + 3
    );
  };

  return (
    <div className="h-full p-4 bg-gradient-to-b from-blue-100 to-yellow-100 max-w-screen-xl mx-auto py-16">
      <div className="container mx-auto md:p-6">
        <div className="text-center">
          <h1 className={`${volkhov.className} text-2xl md:text-4xl font-bold text-gray-800`}>Deals Of The Month</h1>
          <p className={`${poppins.className} md:px-64 md:text-xl text-xs mt-4 text-[#8A8A8A]`}>
            Exclusive discounts on your favorite styles. Limited-time offers you won’t want to miss. Shop now and save big before the month ends!
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-800 text-white rounded shadow-lg">
            Buy Now
          </button>
        </div>

        <div className="mt-5 md:mt-12 text-center">
          <h2 className={`${poppins.className} pb-2 md:text-2xl font-semibold text-gray-800`}>Hurry, Before It’s Too Late!</h2>
          <div className="flex justify-center mt-4 space-x-3 md:space-x-4">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div key={index} className="bg-white p-2 md:p-4 rounded shadow-lg">
                <p className="text-2xl md:text-4xl font-mono text-[#8A8A8A]">{value}</p>
                <p className="md:text-xl text-xs text-gray-600">{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Carousel Section */}
        <div className="mt-12 flex items-center relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-[-2rem] top-[50%] transform -translate-y-[50%] bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-900"
            aria-label="Previous Slide"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Carousel Images */}
          <div className="grid md:grid-cols-3 mx-auto gap-5 md:gap-x-[20px] ">
            {slides.slice(currentSlide, currentSlide + 3).map((image, index) => (
              <div key={index} className=" md:relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                {image.label && (
                  <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-lg">
                    <p className={`text-sm text-[#8A8A8A] ${poppins.className}`}>{image.label}</p>
                    <p className={`text-xl font-bold text-[#8A8A8A] ${poppins.className}`}>{image.discount}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNextSlide}
            className="absolute right-[-2rem] top-[50%] transform -translate-y-[50%] bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-900"
            aria-label="Next Slide"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-4 flex justify-center space-x-2">
          {Array.from({ length: Math.ceil(slides.length / 3) }).map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index * 3)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentSlide === index * 3 ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

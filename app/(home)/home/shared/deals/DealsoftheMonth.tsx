"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import card1 from "../../../../../src/Assets/card1.png";

export default function DealsoftheMonth() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

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

  return (
    <div className="h-full p-4 bg-gradient-to-b from-blue-100 to-yellow-100 max-w-screen-xl mx-auto">
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Deals Of The Month</h1>
          <p className=" mt-4 text-[#8A8A8A]">
            Exclusive discounts on your favorite styles.
            <br />
            Limited-time offers you won’t want to miss.
            <br />
            Shop now and save big before the month ends!
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-800 text-white rounded shadow-lg">
            Buy Now
          </button>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Hurry, Before It’s Too Late!</h2>
          <div className="flex justify-center mt-4 space-x-4">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div key={index} className="bg-white p-4 rounded shadow-lg">
                <p className="text-4xl font-mono text-[#8A8A8A]">{value}</p>
                <p className="text-gray-600">{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-4 relative">
          {/* Left Arrow */}
          <button
            className="absolute left-[-1rem] top-[50%] transform -translate-y-[50%] bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-900"
            aria-label="Previous Slide"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Carousel Images */}
          <div className="flex space-x-4 overflow-hidden">
            {[
              {
                src: {card1},
                alt: "Woman in blue dress",
                label: "01 — Spring Sale",
                discount: "30% OFF",
              },
              {
                src: "https://storage.googleapis.com/a1aa/image/BhOyemhpuO4E65G75-gGQBSr-rz51qlowMhje0MNidU.jpg",
                alt: "Woman in purple dress",
              },
              {
                src: "https://storage.googleapis.com/a1aa/image/TdYVkDyZhgxzLvcTNOMYEo_krz_vWiaCAAZeyA3qvUs.jpg",
                alt: "Woman in maroon dress",
              },
            ].map((image, index) => (
              <div key={index} className="relative">
                <Image
                  src={card1}
                  alt={image.alt}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                {image.label && (
                  <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-lg">
                    <p className="text-sm text-[#8A8A8A]">{image.label}</p>
                    <p className="text-xl font-bold text-[#8A8A8A]">{image.discount}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-[-1rem] top-[50%] transform -translate-y-[50%] bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-900"
            aria-label="Next Slide"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className="mt-4 flex justify-center space-x-2">
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === 0 ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

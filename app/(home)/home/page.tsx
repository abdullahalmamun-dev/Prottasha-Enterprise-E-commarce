"use client";

import { Banner } from "./shared/banner/Banner";
import { Navbar } from "./shared/navbar/Navbar";
import NewArrivals from "./shared/New Arrivals/newArrivals";

export default function Home() {
  return <div className="h-full p-4 bg-white">
    <Navbar></Navbar>
    <Banner></Banner>
    <NewArrivals></NewArrivals>
  </div>;
}

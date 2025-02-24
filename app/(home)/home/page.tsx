"use client";

import { Banner } from "./shared/banner/Banner";
import { Navbar } from "./shared/navbar/Navbar";

export default function Home() {
  return <div className="h-full p-4 bg-white">
    <Navbar></Navbar>
    <Banner></Banner>
  </div>;
}

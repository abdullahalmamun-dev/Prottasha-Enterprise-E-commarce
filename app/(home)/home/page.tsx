"use client";

import { Banner } from "./shared/banner/Banner";
import DealsoftheMonth from "./shared/deals/DealsoftheMonth";
import { Navbar } from "../components/navbar/Navbar";
import NewArrivals from "./shared/New Arrivals/newArrivals";
import WhyChooseUs from "./shared/whychooseUs/whychooseUs";
import Footer from "../components/footer/Footer";

export default function Home() {
  return <div className="h-full p-4 bg-white">
    <Navbar></Navbar>
    <Banner></Banner>
    <DealsoftheMonth></DealsoftheMonth>

    <NewArrivals></NewArrivals>
    {/* <WhyChooseUs></WhyChooseUs> */}
    <Footer></Footer>
  </div>;
}

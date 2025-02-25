"use client";

import { Banner } from "../components/banner/Banner";
import DealsoftheMonth from "./shared/deals/DealsoftheMonth";
import { Navbar } from "../components/navbar/Navbar";
import NewArrivals from "./shared/New Arrivals/newArrivals";
import WhyChooseUs from "./shared/whychooseUs/whychooseUs";
import Footer from "../components/footer/Footer";
import NewsLetter from "./shared/newsletter/NewsLetter";

export default function Home() {
  return <div className="h-full p-4 bg-white">
    <Navbar></Navbar>
    <Banner></Banner>
    <DealsoftheMonth></DealsoftheMonth>

    <NewArrivals></NewArrivals>
    {/* <WhyChooseUs></WhyChooseUs> */}
    <NewsLetter></NewsLetter>
    <Footer></Footer>
  </div>;
}

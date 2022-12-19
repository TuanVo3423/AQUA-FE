import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Category from "../components/Category";
import NewArrival from "../components/NewArrival";
import Adsection from "../components/Adsection";
import RecomendSection from "../components/RecomendSection";
import MobileArrival from "../components/MobileArrival";
import CountDownCoupon from "../components/CountDownCoupon";

export default function Home() {
  return (
    <div>
      <Banner />
      <Feature />
      <Category />
      <NewArrival />
      <Adsection />
      <RecomendSection />
      <CountDownCoupon />
      <MobileArrival />
    </div>
  );
}

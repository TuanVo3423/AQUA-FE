import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Banner from '../components/Banner';
import Cookies from 'universal-cookie';
import Feature from '../components/Feature';
import Category from '../components/Category';
import NewArrival from '../components/NewArrival';
import Adsection from '../components/Adsection';
import AdMobile from '../components/AdMobile';
import RecomendSection from '../components/RecomendSection';
import MobileArrival from '../components/MobileArrival';
import Feature2 from '../components/Feature2';
import DataDonation from '../components/test';

export default function home() {
  return (
    <div>
        <Banner />
        <Feature2 />
        <Category />
        <NewArrival />
        <Adsection />
        <RecomendSection />
        {/* <AdMobile /> */}
        <DataDonation />
        <MobileArrival />
       
    </div>  
  )
}

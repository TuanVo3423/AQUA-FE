import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Banner from '../components/Banner';
import Feature from '../components/Feature';
import Category from '../components/Category';
import NewArrival from '../components/NewArrival';
import Adsection from '../components/Adsection';
import AdMobile from '../components/AdMobile';
import RecomendSection from '../components/RecomendSection';
import MobileArrival from '../components/MobileArrival';
import Feature2 from '../components/Feature2';
import { ArrowFatUp, NavigationArrow } from 'phosphor-react';

export default function home() {
  return (
    <div className='flex flex-col gap-y-10'>
        <Banner />
        <Feature2 />
        <Category />
        <NewArrival />
        <Adsection />
        <RecomendSection />
        <AdMobile />
        <MobileArrival />
       
    </div>  
  )
}

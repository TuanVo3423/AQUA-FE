import React from 'react'
import Navbar from './components/Navbar';
import Banner from '../components/Banner';
import Feature from '../components/Feature';
import Category from '../components/Category';
import NewArrival from '../components/NewArrival';
import Adsection from '../components/Adsection';
import RecomendSection from '../components/RecomendSection';

export default function home() {
  return (
    <div>
        <Banner />
        <Feature/>
        <Category />
        <NewArrival />
        <Adsection />
        <RecomendSection />
    </div>  
  )
}

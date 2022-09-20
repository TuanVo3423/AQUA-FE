import React, { useEffect } from 'react'
import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from '../../pages/components/Navbar';

export default function MainLayout({children , path}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return (
    <div>
       <div className='fixed w-full top-0 left-0 z-[100] max-h-[160px] h-[160px]'>
       <Header />
        <Navbar />
       </div>
        <div className='lg:mt-[160px] mt-[100px]'>
        {children}
        </div>
        <Footer />

    </div>
  )
}

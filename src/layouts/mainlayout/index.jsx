import React, { useCallback, useEffect, useState } from 'react'
import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from '../../pages/components/Navbar';
import Breadcrum from '../../components/Breadcrum';
import { motion } from 'framer-motion';
import { useViewport } from '../../hooks/useViewPort';
import { NavigationArrow } from 'phosphor-react';

export default function MainLayout({children ,path, titleIndex , isShowBreadcrum}) {
  const [offset, setOffset] = useState(0);
  const {isDesktop} = useViewport();

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

  const [y,setY] = useState(document.scrollingElement.scrollHeight);
    const [isUp,setIsUp] = useState(true);
    const handleNavigation = useCallback((e) => {

      if (y > window.scrollY) {
        setIsUp(true);
      } else if (y < window.scrollY) {
        setIsUp(false);
      }
      setY(window.scrollY)
    }, [y]);
    useEffect(() => {

      window.addEventListener("scroll", handleNavigation);
  
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return (
    <div>
       
       {isDesktop ? (
        <motion.div
       initial={{ opacity: 0.7, x: 0, y: 0 }}
       whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ type: 'spring', duration: 1 }}
       className={`${isUp ? 'fixed h-[140px]' : 'h-[0px]'} w-full top-0 left-0 z-[100] max-h-[140px]`}>
       <Header />
        <Navbar />
       </motion.div>
       ) : (
        <div
       className="fixed w-full top-0 left-0 z-[100] max-h-[160px] h-[140px]">
       <Header />
        <Navbar titleIndex={titleIndex} />  
       </div>
       )}
        <div className='lg:mt-[140px] mt-[100px]'>
          {isShowBreadcrum && (
            <Breadcrum tab={path} />
          )}
        {children}
        {offset >= 400 ? (
          <div className='fixed bottom-[80px] right-[50px] p-4 bg-primary rounded-full cursor-pointer'>
          <NavigationArrow size={24} weight="bold" className='rotate-45 text-white' 
          onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}
          />
          </div>
        ) : '' }
        </div>
        <Footer />

    </div>
  )
}

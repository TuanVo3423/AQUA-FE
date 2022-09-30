import { CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';
import Slider from "react-slick";
import {motion} from 'framer-motion';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <motion.div
      initial={{ opacity: 0, x: 20, y: 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
       transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
        className={className}
        style={{ ...style, display: "block"  , right : '5%' , top : '45%' , transform : 'translateX(-50%)' }}
        onClick={onClick}
      >
        <CaretRight size={45} weight="bold" className='text-primary p-2 rounded-full bg-white hover:bg-primary hover:text-white' />
      </motion.div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <motion.div
      initial={{ opacity: 0, x: -20, y: 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
       transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
        className={className}
        style={{ ...style, display: "block" , left : '5%' , zIndex :1, top : '45%' , transform : 'translateX(-50%)' }}
        onClick={onClick}
      >
        <CaretLeft size={45} weight="bold" className='text-primary p-2 rounded-full bg-white hover:bg-primary hover:text-white' />
      </motion.div>
    );
  }



export default function Banner() {
    const [isHoverBanner,setIsHoverBanner] = React.useState(false);
    const onHoverBanner = React.useCallback(() => {
        setIsHoverBanner(true);
    },[]);
    const onOutHoverBanner = React.useCallback(() => {
        setIsHoverBanner(false);
    },[]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,  
        nextArrow:isHoverBanner && <SampleNextArrow />,
        prevArrow:isHoverBanner && <SamplePrevArrow />
      };
  return (
    <div
    onMouseOver={onHoverBanner}
    onMouseOut={onOutHoverBanner}
    >
    <Slider {...settings}>
        <div
       
        className="bg-cover bg-no-repeat bg-center h-[70vh] py-36 relative bg-[url('https://lh3.googleusercontent.com/Z9EKSE-M6wIGl2iCCx9iPjmD3BI8zYRY_braf8j3SVn22HwVzNSWyCPGtKgmjW3S64iZf9fkkBfI92BKvGKTcwqe0Vpnl97C=rw-w1920')]">
        {/* <div className="container">
            <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
                Best Collection For 
            </h1>
            <p className="text-base text-gray-600 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa 
                assumenda aliquid inventore nihil laboriosam odio
            </p>
            <div className="mt-12">
                <a href="shop.html" className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent
               hover:text-primary transition">
                    Shop now
                </a>
            </div>
        </div> */}
        </div>
        <div
        className="bg-cover bg-no-repeat bg-center py-36 relative bg-[url('../images/banner-bg.jpg')]">
        <div className="container">
            <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
                Best Collection For 
            </h1>
            <p className="text-base text-gray-600 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa 
                assumenda aliquid inventore nihil laboriosam odio
            </p>
            <div className="mt-12">
                <a href="shop.html" className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent
               hover:text-primary transition">
                    Shop now
                </a>
            </div>
        </div>
        </div>
        <div
        className="bg-cover bg-no-repeat bg-center py-36 relative bg-[url('../images/banner-bg.jpg')]">
        <div className="container">
            <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
                Best Collection For 
            </h1>
            <p className="text-base text-gray-600 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa 
                assumenda aliquid inventore nihil laboriosam odio
            </p>
            <div className="mt-12">
                <a href="shop.html" className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent
               hover:text-primary transition">
                    Shop now
                </a>
            </div>
        </div>
        </div>
        
    </Slider>

    </div>
  )
}

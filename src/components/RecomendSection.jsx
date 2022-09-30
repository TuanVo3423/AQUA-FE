import React from 'react'
import CardProduct from './CardProduct';
import Slider from 'react-slick';
import { CaretLeft, CaretRight } from 'phosphor-react';
import ProductHot from './ProductHot';
import { useViewport } from '../hooks/useViewPort';
const data = [1,2];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    // initial={{ opacity: 0, x: 20, y: 0 }}
    // whileInView={{ opacity: 1, x: 0, y: 0 }}
    //  transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
      className={className}
      style={{ ...style, display: "block"  , right : '4%' , top : '-50px' , transform : 'translateX(-50%)' }}
      onClick={onClick}
    >
      <CaretRight size={45} weight="bold" className='text-primary p-2 rounded-full  border border-blue-300 bg-white hover:bg-primary hover:text-white' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    // initial={{ opacity: 0, x: -20, y: 0 }}
    // whileInView={{ opacity: 1, x: 0, y: 0 }}
    //  transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
      className={className}
      style={{ ...style, display: "block"  , left : '92%' , top : '-50px' , transform : 'translateX(-50%)' , zIndex : 1}}
      onClick={onClick}
    >
      <CaretLeft size={45} weight="bold" className='text-primary p-2  rounded-full  border border-blue-300 bg-white hover:bg-primary hover:text-white' />
    </div>
  );
}

export default function RecomendSection() {
  const {isDesktop} = useViewport();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,  
    nextArrow:isDesktop && <SampleNextArrow />,
    prevArrow:isDesktop && <SamplePrevArrow />
  };
  return (
    <div className="relative container mb-8">
         <div className='pb-5'>
         <h2 className="inline relative text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6 after:content-[''] after:block after:absolute after:-right-1/4 after:top-1/2 after:w-[50px] after:h-[4px] after:bg-primary">TOP NEW LAPTOP  </h2>
          </div>
      
         
          <Slider {...settings}>
          {data.map((item,index) => {
            return (
            <div key={item}>
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-6">
            <>
                <div className='col-span-2 row-span-2 h-full'>
                      <ProductHot  />
                </div>
                <div className='col-span-1 row-span-1'>
                      <CardProduct  />
                </div>
                <div className='col-span-1 row-span-1'>
                      <CardProduct  />
                </div>
                <div className='col-span-1 row-span-1'>
                      <CardProduct  />
                </div>
                <div className='col-span-1 row-span-1'>
                      <CardProduct  />
                </div>
                </>
           
          </div>
         </div>
          )
         })}
            </Slider>
          </div>
  )
}

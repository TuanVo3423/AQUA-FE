import React from 'react'
import {MagnifyingGlassPlus,HeartStraight} from 'phosphor-react';
import CardProduct from './CardProduct';
import Slider from 'react-slick';
import { CaretLeft, CaretRight } from 'phosphor-react';
import {useViewport} from '../hooks/useViewPort';
import {motion} from 'framer-motion';
import { useSelector } from 'react-redux';
import { ProductSelector } from '../redux/Selectors/Product';

const data = [1,2,3,4,5,6,7];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <motion.div
    // initial={{ opacity: 0, x: 20, y: 0 }}
    // whileInView={{ opacity: 1, x: 0, y: 0 }}
    //  transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
      className={className}
      style={{ ...style, display: "block"  , right : '4%', top : '-50px', transform : 'translateX(-50%)' }}
      onClick={onClick}
    >
      <CaretRight size={45} weight="bold" className='text-primary p-2 rounded-full border border-blue-300 bg-white hover:bg-primary hover:text-white' />
    </motion.div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <motion.div
    // initial={{ opacity: 0, x: -20, y: 0 }}
    // whileInView={{ opacity: 1, x: 0, y: 0 }}
    //  transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
      className={className}
      style={{ ...style, display: "block"  , left : '92%' , top : '-50px'  , zIndex : 1, transform : 'translateX(-50%)' }}
      onClick={onClick}
    >
      <CaretLeft size={45} weight="bold" className='text-primary p-2 rounded-full border border-blue-300 bg-white hover:bg-primary hover:text-white' />
    </motion.div>
  );
}


export default function NewArrival() {
  const {isDesktop} = useViewport();
  const {data} = useSelector(ProductSelector);
  const dataArrival =  data.filter((item,index) => {
      return item.isNew === true;
  });
  console.log('dataArrival', dataArrival)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? 4 : 1,
    slidesToScroll: 1,
      nextArrow:isDesktop && <SampleNextArrow />,
      prevArrow:isDesktop && <SamplePrevArrow />
  };
  return (
    
         <div className="relative container mb-24">
          <div className='pb-5'>
        <h2 className="inline relative text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6 after:content-[''] after:block after:absolute after:-right-1/4 after:top-1/2 after:w-[50px] after:h-[4px] after:bg-primary">top new arrival</h2>
          </div>
            <div>
          <Slider {...settings}>
          {dataArrival.map((item,index) => <CardProduct key={index} _id={item?._id} name={item?.name} price={item?.price} img={item?.attachment} likecount={item?.likeCount} />)}
          </Slider>
        </div>
    </div>
  )
}

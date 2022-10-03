import React from 'react'
import {MagnifyingGlassPlus,HeartStraight, Eye, ArrowRight} from 'phosphor-react';
import CardProduct from './CardProduct';
import { useSelector } from 'react-redux';
import { ProductSelector } from '../redux/Selectors/Product'; 
import Slider from 'react-slick';
import { CaretLeft, CaretRight } from 'phosphor-react';
import {motion} from 'framer-motion';


export default function MobileArrival() {
  const {data} = useSelector(ProductSelector);
  console.log('data',data)
  const dataCellphone =  data.filter((item,index) => {
      return item.category === 'cellphone';
  });
  // console.log('data', data);
  return (
         <div className="container pb-16 mt-20 flex flex-col gap-y-10">
          <div className='pb-5'>
        <h2 className="inline relative text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6 after:content-[''] after:block after:absolute after:-right-1/4 after:top-1/2 after:w-[50px] after:h-[4px] after:bg-primary">Top New Mobile</h2>
          </div>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-6'>
            {dataCellphone.map((item,index) => {
              if(index <4){
                return (
                  <CardProduct _id={item?._id} key={index} name={item?.name} price={item?.price} img={item?.attachment} likecount={item?.likeCount} />
                )
              }
            })}
            </div>
            <div className='text-center flex items-center justify-center gap-x-1'>
            <a className='text-primary font-semibold underline cursor-pointer flex items-center justify-center'>See more</a>
            <div className='flex justify-center translate-y-[2px] hover:translate-x-[10px] transition-all duration-700'>
            <ArrowRight size={20} weight="bold" className='text-primary' />
        </div>
        </div>
    </div>
  )
}

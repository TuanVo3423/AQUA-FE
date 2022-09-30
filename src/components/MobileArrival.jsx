import React from 'react'
import {MagnifyingGlassPlus,HeartStraight, Eye, ArrowRight} from 'phosphor-react';
import CardProduct from './CardProduct';
import Slider from 'react-slick';
import { CaretLeft, CaretRight } from 'phosphor-react';
import {motion} from 'framer-motion';

const data = [1,2,3,4];

export default function MobileArrival() {
  return (
    
         <div className="container pb-16 mt-10 flex flex-col gap-y-10">
          <div className='pb-5'>
        <h2 className="inline relative text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6 after:content-[''] after:block after:absolute after:-right-1/4 after:top-1/2 after:w-[50px] after:h-[4px] after:bg-primary">Top New Mobile</h2>
          </div>
            <div className='grid md:grid-cols-4 grid-cols-1'>
          {data.map((item,index) => <CardProduct key={item} />)}
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

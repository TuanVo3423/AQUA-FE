import React from 'react'
import CardProduct from './CardProduct';
const data = [1,2,3,4,5,6,7,8];

export default function RecomendSection() {
  return (
    <div className="container pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
         {data.map((item,index) => <CardProduct key={item} />)}
            
        </div>
    </div>
  )
}

import React from 'react'
import {MagnifyingGlassPlus,HeartStraight} from 'phosphor-react'
import CardProduct from './CardProduct'

const data = [1,2,3,4];

export default function NewArrival() {
  return (
         <div className="container pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {data.map((item,index) => <CardProduct key={item} />)}
        </div>
    </div>
  )
}

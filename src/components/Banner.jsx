import React from 'react'

export default function Banner() {
  return (
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
  )
}

import React from 'react'

const data = [
    {
        title : 'COMPUTER',
        img : './images/category/category-1.jpg',
    },
    {
        title : 'CELLPHONE',
        img : './images/category/category-2.jpg',
    },
    {
        title : 'OTHERS',
        img : './images/category/category-3.jpg',
    },
   
]
export default function Category() {
  return (
         <div className="container pb-16">
        <div className="block mb-5">
            <h2 className="inline relative text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6 after:content-[''] after:block after:absolute after:-right-1/4 after:top-1/2 after:w-[50px] after:h-[4px] after:bg-primary">shop by category</h2>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
            {data.map((item,index) => {
                return (
            <div className="relative group rounded-sm overflow-hidden" >
                <img src={item.img} className="w-full h-[360px]"></img>
                <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition">
                    {item.title}
                </a>
            </div>

                )
            })}
           
            
        </div>
    </div>
  )
}


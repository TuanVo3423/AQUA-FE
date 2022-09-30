import React from 'react'

export default function AdMobile() {
  return (
    <div className='container w-full h-[80vh] bg-primary'>
        <div className='w-full h-full m-auto flex flex-col gap-10 items-center justify-center'>
            <h1 className='text-white text-center font-bold text-3xl mb-3'>Deal Of the Day</h1>
            <div className='flex gap-3 flex-wrap'>
                    <div 
                    style={{flex:'1 0 21%'}}
                    className='flex flex-col justify-center items-center py-4 px-7 rounded-full border-white border-2 bg-primary text-white'>
                        <p className='text-lg'>1485</p>
                        <div className='w-10 h-1 bg-white'></div>
                        <p className='text-lg'>Days</p>
                    </div>
                    <div 
                    style={{flex:'1 0 21%'}}
                    className='flex flex-col justify-center items-center py-4 px-7 rounded-full border-white border-2 bg-primary text-white'>
                        <p className='text-lg'>1485</p>
                        <div className='w-10 h-1 bg-white'></div>
                        <p className='text-lg'>Days</p>
                    </div>
                    <div 
                    style={{flex:'1 0 21%'}}
                    className='flex flex-col justify-center items-center py-4 px-7 rounded-full border-white border-2 bg-primary text-white'>
                        <p className='text-lg'>1485</p>
                        <div className='w-10 h-1 bg-white'></div>
                        <p className='text-lg'>Days</p>
                    </div>
                    <div 
                    style={{flex:'1 0 21%'}}
                    className='flex flex-col justify-center items-center py-4 px-7 rounded-full border-white border-2 bg-primary text-white'>
                        <p className='text-lg'>1485</p>
                        <div className='w-10 h-1 bg-white'></div>
                        <p className='text-lg'>Days</p>
                    </div>
                 
            </div>
            <button className='p-3 rounded-2xl border-white border-2 bg-transparent text-white hover:bg-white hover:text-primary transition-all duration-500'>
                    <p>Daily Deals</p>
            </button>
            <img src='https://fbtech.7uptheme.net/wp-content/uploads/2017/09/phone.png'>
            </img>
            
        </div>
    </div>
  )
}

import React from 'react'

export default function AdMobile() {
    const data = [
        {
            number : 1485,
            title : 'Years'
        },
        {
            number : 23,
            title : 'Hours'
        },
        {
            number : 22,
            title : 'Mins'
        },
        {
            number : 48,
            title : 'Secs'
        },
    ]
  return (
    <div className='container w-full h-[80vh] bg-primary'>
        <div className='w-full h-full m-auto flex flex-col gap-10 items-center justify-center'>
            <h1 className='text-white text-center font-bold text-3xl mb-3'>Deal Of the Day</h1>
            <div className='flex gap-3 flex-wrap'>
                {data.map((item,index) => {
                    return (

                    <div 
                    style={{flex:'1 0 21%'}}
                    className='flex flex-col justify-center items-center py-1 px-4 rounded-full border-white border-2 bg-primary text-white'>
                        <p className='text-lg'>{item.number}</p>
                        <div className='w-10 h-1 bg-white'></div>
                        <p className='text-lg'>{item.title}</p>
                    </div>
                    )
                })}
                 
            </div>
            <button className='py-2 px-5 rounded-2xl border-white border-2 bg-transparent text-white hover:bg-white hover:text-primary transition-all duration-500'>
                    <p>Daily Deals</p>
            </button>
            <img src='https://fbtech.7uptheme.net/wp-content/uploads/2017/09/phone.png'>
            </img>
            
        </div>
    </div>
  )
}

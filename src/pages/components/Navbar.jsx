import { List } from 'phosphor-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const data = [
    {
        title : 'Bedroom',
        image : './images/icons/bed-2.svg',
    },
    {
        title : 'Bedroom',
        image : './images/icons/bed-2.svg',
    },
    {
        title : 'Bedroom',
        image : './images/icons/bed-2.svg',
    },
    {
        title : 'Bedroom',
        image : './images/icons/bed-2.svg',
    },
    {
        title : 'Bedroom',
        image : './images/icons/bed-2.svg',
    },
    {
        title : 'Bedroom',
        image : './images/icons/bed-2.svg',
    },
];
const categoryTitle = [
    {
        title : 'Home',
        path : '/'
    },
    {
        title : 'Shop',
        path : '/shop'
    },
    {
        title : 'About Us',
        path : '/about-me'
    },
    {
        title : 'Contact Us',
        path : '/contact-me'
    },
];


export default function Navbar() {
    // const [hasUser] = useState({
    //     name : 'tuanvo'
    // });
    const [hasUser] = useState(false);

  return (
    <div>
        <div className="bg-gray-800 bg-black hidden lg:block">
        <div className="container">
            <div className="flex">
                {/* <!-- all category --> */}
                <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
                    <span className="text-white">
                    <List size={22} weight="bold" />
                    </span>
                    <span className="capitalize ml-2 text-white">All categories</span>

                    <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                        {/* <!-- single category --> */}
                        {
                            data.map((item,index) => (
                            <a key={index} href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                <img src={item.image} className="w-5 h-5 object-contain"></img>
                                <span className="ml-6 text-gray-600 text-sm">{item.title}</span>
                             </a>
                            ))
                        }
                        
                     
                    </div>
                </div>
                {/* <!-- all category end --> */}

                {/* <!-- nav menu --> */}
                <div className="flex items-center justify-between flex-grow pl-12">
                    <div className="flex items-center space-x-6 text-base capitalize">
                        {categoryTitle.map((item,index) => (
                            <Link key={index} to={item.path} className="text-gray-200 hover:text-white transition">{item.title}</Link>
                        ))}
                       
                    </div>
                    {hasUser ? (
                        <div className='flex gap-x-3'>
                            <Link to={'/account'}><p className='text-white'>{hasUser.name}</p></Link>
                            <a href="login.html" className="ml-auto underline justify-self-end text-gray-200 hover:text-white transition">
                            Logout
                        </a>
                        </div>
                    ) : (
                        <div className='flex text-white gap-x-2'>
                                <Link to={'/register'}><p className='ml-auto justify-self-end text-gray-200 hover:text-white transition'>Register</p></Link>
                                /
                                <Link to={'/login'}><p className='ml-auto justify-self-end text-gray-200 hover:text-white transition'>Login</p></Link>
                        </div>
                    //     <a href="login.html" className="ml-auto justify-self-end text-gray-200 hover:text-white transition">
                    //         Register
                    //     </a>
                    //     <a href="login.html" className="ml-auto justify-self-end text-gray-200 hover:text-white transition">
                    //     Register/login
                    // </a>
                    )}
                </div>
                {/* <!-- nav menu end --> */}

            </div>
        </div>
    </div>
    </div>
  )
}

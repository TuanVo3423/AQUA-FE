import { HeartStraight, List, MagnifyingGlass, MagnifyingGlassPlus, ShoppingCart, UserCircle , DotsThreeCircle ,House ,X, Storefront, Info, PhoneCall } from 'phosphor-react';

import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const data = [
    {
        title : 'Menu',
        icon : List,
        isActive : true,
    },
    {
        title : 'Category',
        icon : DotsThreeCircle,
        isActive : false,
    },
    {
        title : 'Search',
        icon : MagnifyingGlassPlus,
        isActive : false,
    },
    {
        title : 'Cart', 
        icon : ShoppingCart,
        isActive : false,
    },
    
]
export default function Header() {
    const [isShowMenuMobile,setIsShowMenuMobile] = useState(false);
  return (
    <div>
         <header className="py-4 shadow-sm bg-pink-100 h-[100px] lg:bg-white">
        <div className="container flex items-center justify-between">
            {/* <!-- logo --> */}
            <Link to={'/'} className="lg:block w-32 h-16">
                <img src="./images/logo.png" alt="logo" className="w-full h-full object-cover"></img>
            </Link>
            {/* <!-- logo end --> */}

    <div
        className="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40">
        
        {data.map((item,index) => 
            {
                if(item.isActive){
                    return (
                        <React.Fragment key={index}>
                            <a key={index} href="#" onClick={() => setIsShowMenuMobile(true)} className="flex flex-col justify-center items-center text-center text-gray-700 hover:text-primary transition relative">
                                <item.icon size={32} />
                                <p className="text-xs leading-3">{item.title}</p>
                                </a>
                        </React.Fragment>
                    )
                }
                else {
                    return (
                        <React.Fragment key={index}>
                        <a  href="#" className="flex flex-col justify-center items-center text-center text-gray-700 hover:text-primary transition relative">
                        <item.icon size={32} />
                        <p className="text-xs leading-3">{item.title}</p>
                        </a>

                        </React.Fragment>
                    )
                }
            }
        )}
    </div>

    {isShowMenuMobile && (
        <div
        onClick={() =>setIsShowMenuMobile(false)}
        className="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow" >
        <div
        onClick={e => e.stopPropagation()}
        className="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
            <div
                className="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer"
                onClick={() =>setIsShowMenuMobile(false)}
                >
                    
                <X size={32} weight="bold" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4">Menu</h3>
            <div>
                <Link to={'/'} onClick={() => setIsShowMenuMobile(!isShowMenuMobile)} className="flex items-center justify-between px-4 py-2 font-medium transition hover:bg-gray-100">
                    Home
                    <House size={24} weight="bold" />
                </Link>
                <Link to={'/shop'} onClick={() => setIsShowMenuMobile(!isShowMenuMobile)} className="flex items-center justify-between px-4 py-2 font-medium transition hover:bg-gray-100">
                    Shop
                    <Storefront size={24} weight="bold" />
                </Link>
                <Link to={'/about-me'} onClick={() => setIsShowMenuMobile(!isShowMenuMobile)} className="flex items-center justify-between px-4 py-2 font-medium transition hover:bg-gray-100">
                    About Us
                    <Info size={24} weight="bold" />
                </Link>
                <Link to={'/contact-me'} onClick={() => setIsShowMenuMobile(!isShowMenuMobile)} className="flex items-center justify-between px-4 py-2 font-medium transition hover:bg-gray-100">
                    Contact
                    <PhoneCall size={24} weight="bold" />
                </Link>
            </div>
        </div>
        </div>
    )}
            <div className=" w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <MagnifyingGlass size={24} weight="bold" />
                </span>
                <input type="text"
                    className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
                    placeholder="search"></input>
                <button type="submit"
                    className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition">
                    Search
                </button>
            </div>
            {/* <!-- searchbar end --> */}

            {/* <!-- navicons --> */}
            <div className="space-x-4 flex items-center">
                <Link to={'/wishlist'} className="text-center flex flex-col justify-center items-center text-gray-700 hover:text-primary transition relative">
                    <span
                        className="absolute right-0 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">5</span>
                            <HeartStraight size={24} weight="bold" />
                    <p className="text-xs leading-3">Wish List</p>
                </Link>
                <Link to={'/cart'} className="text-center flex flex-col justify-center items-center text-gray-700 hover:text-primary transition relative">
                    <span
                        className="absolute right-0 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">5</span>
                            <ShoppingCart size={24} weight="bold" />
                    <p className="text-xs leading-3">Your Cart</p>
                </Link>
                <Link to={'/account'} className="text-center flex flex-col justify-center items-center text-gray-700 hover:text-primary transition relative">
                    <span
                        className="absolute right-0 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">5</span>
                            <UserCircle size={24} weight="bold" />
                    <p className="text-xs leading-3">Account</p>
                </Link>
                
            </div>
            {/* <!-- navicons end --> */}

        </div>
    </header>
    </div>
  )
}

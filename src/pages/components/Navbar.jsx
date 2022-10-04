import { List } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { createSlice } from '@reduxjs/toolkit';
import { NavbarSelector } from '../../redux/Selectors/Navbar';
import { AccountSelector } from '../../redux/Selectors/Account';
export const NavbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        indexTitle : 'Home',
    },
    reducers: {
        setIndexNavbarTitle: (state, action) => {
            state.indexTitle = action.payload;
        },
    },
});

const data = [
    {
        title : 'Cellphone',
        image : './images/icons/bed-2.svg',
    },
    {
        title : 'Laptop',
        image : './images/icons/bed-2.svg',
    },
    {
        title : 'Other',
        image : './images/icons/bed-2.svg',
    },
];
const categoryTitle = [
    {
        id : 0,
        title : 'HOME',
        tab : '/',
        path : '/'
    },
    {
        id : 1,
        title : 'SHOP',
        tab : '/shop',
        path : '/shop'
    },
    {
        id : 2,
        title : 'ABOUT US',
        tab : 'AboutMe',
        path : '/about-me'
    },
    {
        id : 3,
        title : 'CONTACT US',
        tab : 'Contact',
        path : '/contact-me'
    },
];
const categoryTitle02 = [
    {
        id : 4,
        title : 'REGISTER /',
        tab : 'Register',
        path : '/register'
    },
    {
        id : 5,
        title : 'LOGIN',
        tab : 'Login',
        path : '/login'
    },
];



export default function Navbar({tab}) {
    const location = useLocation();
    const dispatch = useDispatch();
    const {loginSuccess} = useSelector(AccountSelector);
    // const [hasUser] = useState({
        //     name : 'tuanvo'
        // });
    const {indexTitle} = useSelector(NavbarSelector);
    const [hasUser] = useState(false);

  return (
    <div>
        <div className="bg-black hidden lg:block">
        <div className="container">
            <div className="flex">
                {/* <!-- all category --> */}
                <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
                    <span className="text-white">
                    <List size={22} weight="bold" />
                    </span>
                    <span className="uppercase ml-2 font-semibold text-white">All categories</span>

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
                        {categoryTitle.map((item,index) => {
                           return <Link onClick={() => dispatch(NavbarSlice.actions.setIndexNavbarTitle(index))} key={index} to={item.path} className={`text-gray-200 p-2 border-solid font-semibold ${location.pathname === item.path ? 'border-b-[2px] border-primary ' : ''} hover:text-primary transition`}>{item.title}</Link>
})}
                       
                    </div>
                    {hasUser ? (
                        <div className='flex gap-x-3'>
                            <Link to={'/account'}><p className='text-white'>{hasUser.name}</p></Link>
                            <a href="login.html" className="ml-auto underline justify-self-end text-gray-200 hover:text-white transition">
                            Logout
                        </a>
                        </div>
                    ) : (
                        <div className={`flex text-white gap-x-2 ${loginSuccess && 'hidden'}`}>
                            {categoryTitle02.map((item,index)=> {
                                return (
                                    <React.Fragment  key={item.id}>
                                    <Link to={item.path}><p onClick={() => dispatch(NavbarSlice.actions.setIndexNavbarTitle(item.id))} className={`ml-auto justify-self-end font-semibold ${location.pathname === item.path ? 'border-b-[2px] border-primary ' : ''} uppercase text-gray-200 hover:text-primary transition`}>{item.title}</p></Link>
                                    </React.Fragment>
                                )
                            })}
                                
                                
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

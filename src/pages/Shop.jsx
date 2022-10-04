import React from 'react';
import CardProduct from '../components/CardProduct';
import Breadcrum from '../components/Breadcrum';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { ProductSelector } from '../redux/Selectors/Product';

const dataFilter = [
  {
    title : 'Laptop',
  },
  {
    title : 'Cellphone',
  },
  {
    title : 'Other',
  },
];
const dataFilterBrand = [
  {
    title : 'Apple',
  },
  {
    title : 'Asus',
  },
  {
    title : 'intel',
  },
  {
    title : 'Other',
  },
]
export default function shop({title}) {
  const {data} = useSelector(ProductSelector);
  return (
    <div>
      {/* <Breadcrum tab={title} /> */}
    <div className="container grid lg:grid-cols-4 grid-cols-1 gap-6 pt-4 pb-16 items-start">
    {/* sidebar */}
    <div className="lg:col-span-1 col-span-3 bg-white px-4 pt-4 pb-6 shadow rounded overflow-hidden lg:static z-10 w-full md:block">
      <div className="divide-gray-200 divide-y space-y-5 relative">
        {/* category filter */}
        <div className="relative">
          <div className="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer">
            <i className="fas fa-times" />
          </div>
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
          <div className="space-y-2">
            {/* single category */}
            {dataFilter.map((item,index) => {
              return (
              <div className="flex items-center">
              <input type="checkbox" id="Bedroom" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label htmlFor="Bedroom" className="text-gray-600 ml-3 cursor-pointer">{item.title}</label>
              {/* <div className="ml-auto text-gray-600 text-sm">(15)</div> */}
            </div>
              )
            })}
          </div>
        </div>
        {/* category filter end */}
        {/* brand filter */}

        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
          <div className="space-y-2">
            {/* single brand name */}
            {dataFilterBrand.map((item,index) => {
          return (
          <div key={index} className="flex items-center">
              <input type="checkbox" id="Dominik" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label htmlFor="Dominik" className="text-gray-600 ml-3 cursor-pointer">{item.title}</label>
              {/* <div className="ml-auto text-gray-600 text-sm">(15)</div> */}
            </div>
          )
        })}
            
          </div>
        </div>
        {/* brand filter end */}
        {/* price filter */}
       
        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
          <div className="mt-4 flex items-center">
            <input type="text" className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded" placeholder="min" />
            <span className="mx-3 text-gray-500">-</span>
            <input type="text" className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded" placeholder="mix" />
          </div>
        </div>
        {/* price filter end */}
        {/* size filter */}
        <div className="pt-4 hidden">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
          <div className="flex items-center gap-2">
            {/* single size */}
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-xs" />
              <label htmlFor="size-xs" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                XS
              </label>
            </div>
            {/* single size end */}
            {/* single size */}
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-s" />
              <label htmlFor="size-s" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                S
              </label>
            </div>
            {/* single size end */}
            {/* single size */}
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-m" defaultChecked />
              <label htmlFor="size-m" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                M
              </label>
            </div>
            {/* single size end */}
            {/* single size */}
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-l" />
              <label htmlFor="size-l" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                L
              </label>
            </div>
            {/* single size end */}
            {/* single size */}
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-xl" />
              <label htmlFor="size-xl" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                XL
              </label>
            </div>
            {/* single size end */}
          </div>
        </div>
        {/* size filter end */}
        {/* color filter */}
        <div className="pt-4 hidden ">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">color</h3>
          <div className="flex items-center gap-2">
            {/* single color */}
            <div className="color-selector">
              <input type="radio" name="color" className="hidden" id="color-red" defaultChecked />
              <label htmlFor="color-red" style={{backgroundColor : '#fc3d57'}} className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
              </label>
            </div>
            {/* single color end */}
            {/* single color */}
            <div className="color-selector">
              <input type="radio" name="color" className="hidden" id="color-white" />
              <label htmlFor="color-white" style={{backgroundColor : '#fff'}} className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
              </label>
            </div>
            {/* single color end */}
            {/* single color */}
            <div className="color-selector">
              <input type="radio" name="color" className="hidden" id="color-black" />
              <label htmlFor="color-black" style={{backgroundColor : '#000'}} className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
              </label>
            </div>
            {/* single color end */}
          </div>
        </div>
        {/* color filter end */}
      </div>
    </div>
    {/* sidebar end */}
    {/* products */}
    <div className="col-span-3">
      {/* sorting */}
      <div className="mb-4 flex items-center">
        <button className="bg-primary border border-primary text-white px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition lg:hidden text-sm mr-3 focus:outline-none">
          Filter
        </button>
        <select className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
          <option>Default sorting</option>
          <option>Price low-high</option>
          <option>Price high-low</option>
          <option>Latest product</option>
        </select>
        <div className="flex gap-2 ml-auto">
          <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
            <i className="fas fa-th" />
          </div>
          <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
            <i className="fas fa-list" />
          </div>
        </div>
      </div>
      {/* sorting end */}
      {/* product wrapper */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
        {data.map((item,index) => {
          return <CardProduct key={index}  _id={item?._id} name={item.name} price={item.price} img={item.attachment} likecount={item.likeCount} />
        })}
            
      </div>
      {/* product wrapper end */}
    </div>
    {/* products end */}
  </div>
    </div>
  )
}

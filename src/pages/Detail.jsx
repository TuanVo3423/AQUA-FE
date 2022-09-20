import React from 'react';
import Navbar from './components/Navbar';
import Breadcrum from '../components/Breadcrum';
import CardProduct from '../components/CardProduct';

export default function Detail() {
  return (
    <div>
      <Breadcrum />
        <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
        {/* product image */}
        <div>
          <div>
            <img id="main-img" src="./images/products/product9.jpg" className="w-full" />
          </div>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <div>
              <img src="./images/products/product9.jpg" className="single-img w-full cursor-pointer border border-primary" />
            </div>
            <div>
              <img src="./images/products/product1.jpg" className="single-img w-full cursor-pointer border" />
            </div>
            <div>
              <img src="./images/products/product8.jpg" className="single-img w-full cursor-pointer border" />
            </div>
            <div>
              <img src="./images/products/product12.jpg" className="single-img w-full cursor-pointer border" />
            </div>
            <div>
              <img src="./images/products/product11.jpg" className="single-img w-full cursor-pointer border" />
            </div>
          </div>
        </div>
        {/* product image end */}
        {/* product content */}
        <div>
          <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2">Italian L Shape Sofa</h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span><i className="fas fa-star" /></span>
              <span><i className="fas fa-star" /></span>
              <span><i className="fas fa-star" /></span>
              <span><i className="fas fa-star" /></span>
              <span><i className="fas fa-star" /></span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">Sofa</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-primary font-semibold text-xl">$450.00</span>
            <span className="text-gray-500 text-base line-through">$500.00</span>
          </div>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi
            labore blanditiis
          </p>
          {/* size */}
          <div className="mt-4">
            <h3 className="text-base text-gray-800 mb-1">Size</h3>
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
          {/* size end */}
          {/* color */}
          <div className="mt-4">
            <h3 className="text-base text-gray-800 mb-1">Color</h3>
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
          {/* color end */}
          {/* quantity */}
          <div className="mt-4">
            <h3 className="text-base text-gray-800 mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
              <div className="h-8 w-10 flex items-center justify-center">4</div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
            </div>
          </div>
          {/* color end */}
          {/* add to cart button */}
          <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
            <a href="#" className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm flex items-center">
              <span className="mr-2"><i className="fas fa-shopping-bag" /></span> Add to cart
            </a>
            <a href="#" className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm">
              <span className="mr-2"><i className="far fa-heart" /></span> Wishlist
            </a>
          </div>
          {/* add to cart button end */}
          {/* product share icons */}
          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fab fa-instagram" />
            </a>
          </div>
          {/* product share icons end */}
        </div>
        {/* product content end */}
      </div>

      {/* detail review */}
      <div className="container pb-16">
        {/* detail buttons */}
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          Product Details
        </h3>
        {/* details button end */}
        {/* details content */}
        <div className="lg:w-4/5 xl:w-3/5 pt-6">
          <div className="space-y-3 text-gray-600">
            <p>
              Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than
              ever. For the first time, content creators can edit and seamlessly play back multiple streams of
              full‑quality 4K video without dropping a frame.
            </p>
            <p>
              Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than
              ever. For the first time, content creators can edit and seamlessly play back multiple streams of
              full‑quality 4K video without dropping a frame.
            </p>
            <p>
              Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro,
              make smart tools such as magic wands and audio filters more accurate at auto‑detection, and so
              much more. That’s not just brain power — that’s the power of a full stack of ML technologies.
            </p>
          </div>
          {/* details table */}
          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tbody><tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                <td className="py-2 px-4 border border-gray-300">Black, Brown, Red</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                <td className="py-2 px-4 border border-gray-300">Artificial Leather</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                <td className="py-2 px-4 border border-gray-300">55kg</td>
              </tr>
            </tbody></table>
          {/* details table */}
        </div>
        {/* details content end */}
      </div>

      {/* relative product */}

      <div className="container pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">related products</h2>
        {/* product wrapper */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {/* single product */}
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
        </div>
        {/* product wrapper end */}
      </div>
    </div>
  )
}

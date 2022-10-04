import { AddressBook, CreditCard, Gift, HeartStraight, SignOut, Trash } from 'phosphor-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { AccountSelector } from '../redux/Selectors/Account';
import { ProductSelector } from '../redux/Selectors/Product';


export default function Wishlist() {
  const {username,fullname,email} = useSelector(AccountSelector);
  const {data} = useSelector(ProductSelector);
  return (
    <div>
           <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        {/* sidebar */}
        <div className="col-span-3">
          {/* account profile */}
          <div className="px-4 py-3 shadow flex items-center gap-4">
            <div className="flex-shrink-0">
              <img src="images/avatar.png" className="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover" />
            </div>
            <div>
              <p className="text-gray-600">Hello,</p>
              <h4 className="text-gray-800 capitalize font-medium">{username}</h4>
            </div>
          </div>
          {/* account profile end */}
          {/* profile links */}
          <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
            {/* single link */}
            <div className="space-y-1 pl-8">
              <a href="account.html" className="relative text-base font-medium capitalize hover:text-primary transition block">
                Manage account
                <span className="absolute -left-8 top-0 text-base">
                <AddressBook size={22} weight="bold" />
                </span>
              </a>
              <a href="profile-info.html" className="hover:text-primary transition capitalize block">Profile
                information</a>
              <a href="manage-address.html" className="hover:text-primary transition capitalize block">Manage
                address</a>
              <a href="change-password.html" className="hover:text-primary transition capitalize block">change
                password</a>
            </div>
            {/* single link end */}
            {/* single link */}
            <div className="space-y-1 pl-8 pt-4">
              <a href="#" className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                My order history
                <span className="absolute -left-8 top-0 text-base">
                <Gift size={22} weight="bold" />
                </span>
              </a>
              <a href="#" className="hover:text-primary transition block capitalize">my returns</a>
              <a href="#" className="hover:text-primary transition block capitalize">my cancellations</a>
              <a href="#" className="hover:text-primary transition block capitalize">my reviews</a>
            </div>
            {/* single link end */}
            {/* single link */}
            <div className="space-y-1 pl-8 pt-4">
              <a href="#" className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                Payment methods
                <span className="absolute -left-8 top-0 text-base">
                <CreditCard size={22} weight="bold" />
                </span>
              </a>
              <a href="#" className="hover:text-primary transition block capitalize">Voucher</a>
            </div>
            {/* single link end */}
            {/* single link */}
            <div className="pl-8 pt-4">
              <a href="wishlist.html" className="relative medium capitalize font-medium hover:text-primary transition block text-primary">
                my wishlist
                <span className="absolute -left-8 top-0 text-base">
                <HeartStraight size={22} weight="bold" />
                </span>
              </a>
            </div>
            {/* single link end */}
            {/* single link */}
            <div className="pl-8 pt-4">
              <a href="#" className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                logout
                <span className="absolute -left-8 top-0 text-base">
                <SignOut size={22} weight="bold" />
                </span>
              </a>
            </div>
            {/* single link end */}
          </div>
          {/* profile links end */}
        </div>
        {/* sidebar end */}
        {/* account content */}
        <div className="col-span-9 mt-6 lg:mt-0 space-y-4">
          {/* single wishlist */}
          {data.map((item,index) => {
            if(index < 4){
              return (
                <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
            {/* cart image */}
            <div className="md:w-28 w-full flex-shrink-0">
              <img src={item?.attachment} className="w-full" />
            </div>
            {/* cart image end */}
            {/* cart content */}
            <div className="md:w-1/3 w-full">
              <h2 className="text-gray-800 mb-1 xl:text-xl textl-lg font-medium uppercase">
                {item?.name}
              </h2>
              <p className="text-gray-500 text-sm">Availability: <span className="text-green-600">In Stock</span></p>
            </div>
            {/* cart content end */}
            <div>
              <p className="text-primary text-lg font-semibold">${item?.price}</p>
            </div>
            <a href="#" className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
              Add to cart
            </a>
            <div className="text-gray-600 hover:text-primary cursor-pointer">
            <Trash size={24} weight="bold" />
            </div>
          </div>
              )
            }
          })}
          {/* single wishlist end */}
        </div>
        {/* account content end */}
      </div>
    </div>
  )
}

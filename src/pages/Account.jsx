import React, { useState } from 'react'

export default function Account() {
  const [choice , setChoice] = useState();
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
              <h4 className="text-gray-800 capitalize font-medium">vantuan</h4>
            </div>
          </div>
          {/* account profile end */}
          {/* profile links */}
          <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
            {/* single link */}
            <div className="space-y-1 pl-8">
              <a href="account.html" className="relative text-base font-medium capitalize hover:text-primary transition block text-primary">
                Manage account
                <span className="absolute -left-8 top-0 text-base">
                  <i className="far fa-address-card" />
                </span>
              </a>
              <a href="profile-info.html" className="hover:text-primary transition capitalize block">Profile information</a>
              <a href="manage-address.html" className="hover:text-primary transition capitalize block">Manage address</a>
              <a href="change-password.html" className="hover:text-primary transition capitalize block">change password</a>
            </div>
            {/* single link end */}
            {/* single link */}
            <div className="space-y-1 pl-8 pt-4">
              <a href="#" className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                My order history
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fas fa-gift" />
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
                  <i className="far fa-credit-card" />
                </span>
              </a>
              <a href="#" className="hover:text-primary transition block capitalize">Voucher</a>
            </div>
            {/* single link end */}
            {/* single link */}
            <div className="pl-8 pt-4">
              <a href="wishlist.html" className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                my wishlist
                <span className="absolute -left-8 top-0 text-base">
                  <i className="far fa-heart" />
                </span>
              </a>
            </div>
            {/* single link end */}
            {/* single link */}
            <div className="pl-8 pt-4">
              <a href="#" className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                logout
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fas fa-sign-out-alt" />
                </span>
              </a>
            </div>
            {/* single link end */}
          </div>
          {/* profile links end */}
        </div>
        {/* sidebar end */}
        {/* account content */}
        <div className="col-span-9 grid md:grid-cols-1 gap-4 mt-6 lg:mt-0">
          {/* single card */}
          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex justify-between items center mb-4">
              <h3 className="font-medium capitalize text-gray-800 text-lg">personal profile</h3>
              <a href="#" className="text-primary">Edit</a>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-700 font-medium">vantuan</h4>
              <p className="text-gray-800">example@mail.com</p>
              <p className="text-gray-800">(123) 456-789</p>
            </div>
          </div>
          {/* single card end */}
          {/* single card */}
          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex justify-between items center mb-4">
              <h3 className="font-medium capitalize text-gray-800 text-lg">Shipping Address</h3>
              <a href="#" className="text-primary">Edit</a>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-700 font-medium">vantuan</h4>
              <p className="text-gray-800">3891 Ranchview Dr.</p>
              <p className="text-gray-800">Richardson, Califora</p>
              <p className="text-gray-800">(123) 456-789</p>
            </div>
          </div>
          {/* single card end */}
          {/* single card */}
          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex justify-between items center mb-4">
              <h3 className="font-medium capitalize text-gray-800 text-lg">Billing Address</h3>
              <a href="#" className="text-primary">Edit</a>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-700 font-medium">vantuan</h4>
              <p className="text-gray-800">3891 Ranchview Dr.</p>
              <p className="text-gray-800">Richardson, Califora</p>
              <p className="text-gray-800">(123) 456-789</p>
            </div>
          </div>
          {/* single card end */}
        </div>
        {/* account content end */}
      </div>
    </div>
  )
}

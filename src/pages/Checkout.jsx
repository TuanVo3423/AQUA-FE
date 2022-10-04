import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductSelector } from '../redux/Selectors/Product';

export default function Checkout() {
    const countries = ["China", "Russia", "UK"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("United States");
    const {data} = useSelector(ProductSelector);
    const dataCheckOut = data[0];

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };

    return (  
        <div className="bg-gray-50">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Checkout</h2>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">Contact information</h2>
                <div className="mt-4">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                  <div className="mt-1">
                    <input type="email" id="email-address" name="email-address" autoComplete="email" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                </div>
              </div>
              <div className="mt-10 border-t border-gray-200 pt-10">
                <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                    <div className="mt-1">
                      <input type="text" id="first-name" name="first-name" autoComplete="given-name" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                    <div className="mt-1">
                      <input type="text" id="last-name" name="last-name" autoComplete="family-name" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                    <div className="mt-1">
                      <input type="text" name="company" id="company" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <div className="mt-1">
                      <input type="text" name="address" id="address" autoComplete="street-address" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">Apartment, suite, etc.</label>
                    <div className="mt-1">
                      <input type="text" name="apartment" id="apartment" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                    <div className="mt-1">
                      <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                    <div className="mt-1">
                      <select id="country" name="country" autoComplete="country-name" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">State / Province</label>
                    <div className="mt-1">
                      <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">Postal code</label>
                    <div className="mt-1">
                      <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <div className="mt-1">
                      <input type="text" name="phone" id="phone" autoComplete="tel" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 border-t border-gray-200 pt-10">
                <fieldset>
                  <legend className="text-lg font-medium text-gray-900">Delivery method</legend>
                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    {/*
                Checked: "border-transparent", Not Checked: "border-gray-300"
                Active: "ring-2 ring-indigo-500"
              */}
                    <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                      <input type="radio" name="delivery-method" defaultValue="Standard" className="sr-only" aria-labelledby="delivery-method-0-label" aria-describedby="delivery-method-0-description-0 delivery-method-0-description-1" />
                      <div className="flex-1 flex">
                        <div className="flex flex-col">
                          <span id="delivery-method-0-label" className="block text-sm font-medium text-gray-900"> Standard </span>
                          <span id="delivery-method-0-description-0" className="mt-1 flex items-center text-sm text-gray-500"> 4–10 business days </span>
                          <span id="delivery-method-0-description-1" className="mt-6 text-sm font-medium text-gray-900"> $5.00 </span>
                        </div>
                      </div>
                      {/*
                  Not Checked: "hidden"

                  Heroicon name: solid/check-circle
                */}
                      <svg className="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {/*
                  Active: "border", Not Active: "border-2"
                  Checked: "border-indigo-500", Not Checked: "border-transparent"
                */}
                      <div className="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" />
                    </label>
                    {/*
                Checked: "border-transparent", Not Checked: "border-gray-300"
                Active: "ring-2 ring-indigo-500"
              */}
                    <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                      <input type="radio" name="delivery-method" defaultValue="Express" className="sr-only" aria-labelledby="delivery-method-1-label" aria-describedby="delivery-method-1-description-0 delivery-method-1-description-1" />
                      <div className="flex-1 flex">
                        <div className="flex flex-col">
                          <span id="delivery-method-1-label" className="block text-sm font-medium text-gray-900"> Express </span>
                          <span id="delivery-method-1-description-0" className="mt-1 flex items-center text-sm text-gray-500"> 2–5 business days </span>
                          <span id="delivery-method-1-description-1" className="mt-6 text-sm font-medium text-gray-900"> $16.00 </span>
                        </div>
                      </div>
                      {/*
                  Not Checked: "hidden"

                  Heroicon name: solid/check-circle
                */}
                      <svg className="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {/*
                  Active: "border", Not Active: "border-2"
                  Checked: "border-indigo-500", Not Checked: "border-transparent"
                */}
                      <div className="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" />
                    </label>
                  </div>
                </fieldset>
              </div>
              {/* Payment */}
              <div className="mt-10 border-t border-gray-200 pt-10">
                <h2 className="text-lg font-medium text-gray-900">Payment</h2>
                <fieldset className="mt-4">
                  <legend className="sr-only">Payment type</legend>
                  <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div className="flex items-center">
                      <input id="credit-card" name="payment-type" type="radio" defaultChecked className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                      <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700"> Credit card </label>
                    </div>
                    <div className="flex items-center">
                      <input id="paypal" name="payment-type" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                      <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700"> PayPal </label>
                    </div>
                    <div className="flex items-center">
                      <input id="etransfer" name="payment-type" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                      <label htmlFor="etransfer" className="ml-3 block text-sm font-medium text-gray-700"> eTransfer </label>
                    </div>
                  </div>
                </fieldset>
                <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                  <div className="col-span-4">
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card number</label>
                    <div className="mt-1">
                      <input type="text" id="card-number" name="card-number" autoComplete="cc-number" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">Name on card</label>
                    <div className="mt-1">
                      <input type="text" id="name-on-card" name="name-on-card" autoComplete="cc-name" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
                    <div className="mt-1">
                      <input type="text" name="expiration-date" id="expiration-date" autoComplete="cc-exp" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                    <div className="mt-1">
                      <input type="text" name="cvc" id="cvc" autoComplete="csc" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Order summary */}
            <div className="mt-10 lg:mt-0">
              <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
              <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="sr-only">Items in your cart</h3>
                <ul role="list" className="divide-y divide-gray-200">
                  <li className="flex py-6 px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img src={dataCheckOut?.attachment} alt="Front of men's Basic Tee in black." className="w-20 rounded-md" />
                    </div>
                    <div className="ml-6 flex-1 flex flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <a href="#" className="font-medium text-gray-700 hover:text-gray-800"> {dataCheckOut?.name} </a>
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">Category: {dataCheckOut?.category}</p>
                        </div>
                        <div className="ml-4 flex-shrink-0 flow-root">
                          <button type="button" className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Remove</span>
                            {/* Heroicon name: solid/trash */}
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex-1 pt-2 flex items-end justify-between">
                        <p className="mt-1 text-sm font-medium text-gray-900">${dataCheckOut?.price}</p>
                        <div className="ml-4">
                          <label htmlFor="quantity" className="sr-only">Quantity</label>
                          <select id="quantity" name="quantity" className="rounded-md border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* More products... */}
                </ul>
                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">${dataCheckOut?.price}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Shipping</dt>
                    <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Taxes</dt>
                    <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base font-medium">Total</dt>
                    <dd className="text-base font-medium text-gray-900">${dataCheckOut?.price + 10}</dd>
                  </div>
                </dl>
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <button  className="w-full bg-primary border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:opacity-[0.8]  focus:outline-none focus:ring-2 focus:ring-offset-2">Confirm order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

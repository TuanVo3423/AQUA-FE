import { Trash } from "phosphor-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paypal from "../components/Paypal";
import { AccountReducer } from "../redux/Reducers/Account";
import { AccountSelector } from "../redux/Selectors/Account";
import { ProductSelector } from "../redux/Selectors/Product";

export default function Checkout() {
  const countries = ["China", "Russia", "UK"];
  const [ischeckout, setIsCheckOut] = useState(false);
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");
  const { data } = useSelector(ProductSelector);
  const { cartlist, userID, checkout } = useSelector(AccountSelector);
  const dataCheckOut = data[0];
  const handleCheckout = () => {
    dispatch(AccountReducer.actions.setStateForHistoryAfterConfirm(checkout));
    setIsCheckOut(true);
  };
  useEffect(() => {
    dispatch(AccountReducer.actions.setCheckoutListForFirstTime(cartlist));
  }, []);
  let total = 0;
  for (let i = 0; i < checkout.length; i++) {
    total += checkout[i].price * checkout[i].quantity;
  }
  const handleRemoveCheckout = ({ id }) => {
    dispatch(
      AccountReducer.actions.removeProductItemOfCheckout({ idproduct: id })
    );
  };
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
              <h2 className="text-lg font-medium text-gray-900">
                Contact information
              </h2>
              <div className="mt-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    autoComplete="email"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">
                Shipping information
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      autoComplete="family-name"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="street-address"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-10">
              <fieldset>
                <legend className="text-lg font-medium text-gray-900">
                  Delivery method
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                    <input
                      type="radio"
                      name="delivery-method"
                      defaultValue="Standard"
                      className="sr-only"
                      aria-labelledby="delivery-method-0-label"
                      aria-describedby="delivery-method-0-description-0 delivery-method-0-description-1"
                    />
                    <div className="flex-1 flex">
                      <div className="flex flex-col">
                        <span
                          id="delivery-method-0-label"
                          className="block text-sm font-medium text-gray-900"
                        >
                          {" "}
                          Standard{" "}
                        </span>
                        <span
                          id="delivery-method-0-description-0"
                          className="mt-1 flex items-center text-sm text-gray-500"
                        >
                          {" "}
                          4–10 business days{" "}
                        </span>
                        <span
                          id="delivery-method-0-description-1"
                          className="mt-6 text-sm font-medium text-gray-900"
                        >
                          {" "}
                          $5.00{" "}
                        </span>
                      </div>
                    </div>

                    <svg
                      className="h-5 w-5 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <div
                      className="absolute -inset-px rounded-lg border-2 pointer-events-none"
                      aria-hidden="true"
                    />
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          {/* Order summary */}
          <div className="mt-4 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {checkout.map((item, index) => {
                  return (
                    <li key={index} className="flex py-6 px-4 sm:px-6">
                      <div className="flex-shrink-0">
                        <img
                          src={item?.attachment}
                          alt="Front of men's Basic Tee in black."
                          className="w-20 rounded-md"
                        />
                      </div>
                      <div className="ml-6 flex-1 flex flex-col">
                        <div className="flex">
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm">
                              <a
                                href="#"
                                className="font-medium text-gray-700 hover:text-gray-800"
                              >
                                {" "}
                                {item?.name}{" "}
                              </a>
                            </h4>
                            <p className="mt-1 text-sm text-gray-500">
                              Category: {item?.category}
                            </p>
                          </div>
                          <div className="ml-4 flex-shrink-0 flow-root">
                            <button
                              type="button"
                              className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Remove</span>
                              <Trash
                                onClick={() =>
                                  handleRemoveCheckout({ id: item.id })
                                }
                                size={24}
                                weight="bold"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="flex-1 pt-2 flex items-end justify-between">
                          <p className="mt-1 text-sm font-medium text-gray-900">
                            ${item?.price * item?.quantity}
                          </p>
                          <div className="ml-4">
                            <span className="text-base font-semibold cursor-pointer">
                              Quantity: {item?.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}

                {/* More products... */}
              </ul>
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ${total}
                  </dd>
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
                  <dd className="text-base font-medium text-gray-900">
                    ${total + 10}
                  </dd>
                </div>
              </dl>
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                {ischeckout ? (
                  <Paypal dataCheckout={checkout} />
                ) : (
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-primary border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:opacity-[0.8]  focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Confirm order
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

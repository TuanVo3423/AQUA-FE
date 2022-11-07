import { Trash } from "phosphor-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AccountReducer } from "../redux/Reducers/Account";
import { AccountSelector } from "../redux/Selectors/Account";
import { ProductSelector } from "../redux/Selectors/Product";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartlist, userID } = useSelector(AccountSelector);
  const { data } = useSelector(ProductSelector);
  const handleIncreaseMount = ({ idproduct, quantity }) => {
    dispatch(
      AccountReducer.actions.changeQuantityOfProductItem({
        idproduct,
        quantity: quantity + 1,
      })
    );
  };
  useEffect(() => {
    console.log("change");
    dispatch(
      AccountReducer.actions.requestChangeCartList({
        cartlist,
        userID,
      })
    );
  }, [cartlist]);
  const handleDecreaseMount = ({ idproduct, quantity }) => {
    if (quantity - 1 >= 1) {
      dispatch(
        AccountReducer.actions.changeQuantityOfProductItem({
          idproduct,
          quantity: quantity - 1,
        })
      );
    }
  };
  const handleRemoveItemCartList = ({ idproduct }) => {
    dispatch(AccountReducer.actions.removeProductItemOfCartList({ idproduct }));
  };
  let result = [];
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < cartlist.length; j++) {
      if (data[i]._id === cartlist[j].id) {
        result.push(cartlist[j]);
        total += cartlist[j].price * cartlist[j].quantity;
      }
    }
  }
  return (
    <div className="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
      {/* product cart */}
      <div className="xl:col-span-9 lg:col-span-8">
        {/* cart title */}
        <div className="bg-gray-200 py-2 pl-12 pr-20 xl:pr-28 mb-4 hidden md:flex">
          <p className="text-gray-600 text-center">Product</p>
          <p className="text-gray-600 text-center ml-auto mr-16 xl:mr-24">
            Quantity
          </p>
          <p className="text-gray-600 text-center">Total</p>
        </div>
        {/* cart title end */}
        {/* shipping carts */}
        <div className="space-y-4">
          {/* single cart */}
          {result.map((item, index) => {
            if (result.length === 0) {
              return <h1>Khong co hang nao o day ca</h1>;
            } else {
              return (
                <div
                  key={index}
                  className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap"
                >
                  {/* cart image */}
                  <div className="w-32 flex-shrink-0">
                    <img src={item?.attachment} className="w-full" />
                  </div>
                  {/* cart image end */}
                  {/* cart content */}
                  <div className="md:w-1/3 w-full">
                    <h2 className="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                      {item?.name}
                    </h2>
                    <p className="text-primary font-semibold">${item?.price}</p>
                    <p className="text-gray-500">Category: {item?.category}</p>
                  </div>
                  {/* cart content end */}
                  {/* cart quantity */}
                  <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                    <div
                      onClick={() =>
                        handleDecreaseMount({
                          idproduct: item.id,
                          quantity: item.quantity,
                        })
                      }
                      className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                    >
                      -
                    </div>
                    <div className="h-8 w-10 flex items-center justify-center">
                      {item.quantity}
                    </div>
                    <div
                      onClick={() =>
                        handleIncreaseMount({
                          idproduct: item.id,
                          quantity: item.quantity,
                        })
                      }
                      className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                    >
                      +
                    </div>
                  </div>
                  {/* cart quantity end */}
                  <div className="ml-auto md:ml-0">
                    <p className="text-primary text-lg font-semibold">
                      ${item?.price}
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleRemoveItemCartList({
                        idproduct: item.id,
                      })
                    }
                    className="text-gray-600 hover:text-primary cursor-pointer"
                  >
                    <Trash size={24} weight="bold" />
                  </div>
                </div>
              );
            }
          })}
        </div>
        {/* shipping carts end */}
      </div>
      {/* product cart end */}
      {/* order summary */}
      <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
        <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
          ORDER SUMMARY
        </h4>
        <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
          <div className="flex justify-between font-medium">
            <p>Subtotal</p>
            <p>${total}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>Free</p>
          </div>
        </div>
        <div className="flex justify-between my-3 text-gray-800 font-semibold uppercase">
          <h4>Total</h4>
          <h4>${total}</h4>
        </div>
        {/* searchbar */}
        <div className="flex mb-5">
          <input
            type="text"
            className="pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm"
            placeholder="Coupon"
          />
          <button
            type="submit"
            className="bg-primary border border-primary text-white px-5 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition text-sm font-roboto"
          >
            Apply
          </button>
        </div>
        {/* searchbar end */}
        {/* checkout */}
        <Link
          to={"/checkout"}
          className="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
             hover:text-primary transition text-sm w-full block text-center"
        >
          Process to checkout
        </Link>
        {/* checkout end */}
      </div>
      {/* order summary end */}
    </div>
  );
}

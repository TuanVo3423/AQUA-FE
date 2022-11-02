import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AccountReducer } from "../redux/Reducers/Account";
import { AccountSelector } from "../redux/Selectors/Account";

export default function Paypal({ dataCheckout }) {
  const { history, userID, cartlist } = useSelector(AccountSelector);
  useEffect(() => {
    dispatch(
      AccountReducer.actions.requestSetHistoryAfterCheckout({ history, userID })
    );
    console.log("change cartlist and update in db with data : ", cartlist);
  }, [history]);
  // useEffect(() => {
  //   console.log("change cartlist and update in db with data : ", cartlist);
  // }, [cartlist]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let total = 0;
  for (let i = 0; i < dataCheckout.length; i++) {
    total += dataCheckout[i].price;
  }
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "The order has been created",
                amount: {
                  currency_code: "CAD",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          // console.log("dataCheckout : ", dataCheckout);

          // console.log(order);
          await navigate("/ordercomplete");
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

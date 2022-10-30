import { all, fork } from "redux-saga/effects";
import accountSaga from "./accountSaga";
import homeProductSaga from "./fetchSaga";
import cartList from "./CartList";
function* rootSaga() {
  yield all([fork(accountSaga), fork(homeProductSaga), fork(cartList)]);
}
export default rootSaga;

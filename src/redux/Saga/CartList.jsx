import { takeLatest, call, put } from "redux-saga/effects";
import { AccountReducer } from "../Reducers/Account";
import { SystemReducer } from "../Reducers/System";
import * as api from "../../api";

function* addProductToCartList(action) {
  try {
    yield put(SystemReducer.actions.reset());
    // call api
    const data = yield call(api.addProductToCartList, action.payload);
    yield put(AccountReducer.actions.addProductToCartListState(action.payload));
    yield put(
      SystemReducer.actions.setMessageAlert({
        message: "Add product to cartlist successfully",
        type: "success",
        kind: true,
      })
    );
    yield put(SystemReducer.actions.setIsLoading(false));
  } catch (error) {
    console.log(error);
  }
}

function* updateProductCartList(action) {
  try {
    yield put(SystemReducer.actions.reset());
    console.log(
      "vao saga de thay doi cartlist sau khi checkout : ",
      action.payload
    );
    // call api
    const data = yield call(api.changeCartListItems, action.payload);
    console.log(
      "hoan thanh vao database de thay doi cartlist sau khi checkout"
    );

    yield put(SystemReducer.actions.setIsLoading(false));
  } catch (error) {
    console.log(error);
  }
}
function* cartList() {
  yield takeLatest(
    AccountReducer.actions.requestAddProductToCartList,
    addProductToCartList
  );
  yield takeLatest(
    AccountReducer.actions.requestChangeCartList,
    updateProductCartList
  );
}

export default cartList;

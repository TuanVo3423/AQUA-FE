import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

// redux slices
import { NavbarSlice } from "../pages/components/Navbar";
import { AccountReducer } from "./Reducers/Account";
import { DetailReducer } from "./Reducers/Detail";
import { ProductReducer } from "./Reducers/Product";
import { SystemReducer } from "./Reducers/System";
import { ShopReducer } from "./Reducers/Shop";

import rootSaga from "./Saga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    system: SystemReducer.reducer,
    navbar: NavbarSlice.reducer, // đáng ra chỗ này nó sẽ có 2 param là state và actions nhưng nó đã xử lí cho mình rồi
    account: AccountReducer.reducer,
    product: ProductReducer.reducer,
    detail: DetailReducer.reducer,
    shop: ShopReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;

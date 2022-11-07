import { createSlice } from "@reduxjs/toolkit";

export const ShopReducer = createSlice({
  name: "shop",
  initialState: {
    FilterProduct: [],
  },
  reducers: {
    initFilterProduct: (state, action) => {
      state.FilterProduct = action.payload;
    },
    filterByCategory: (state, action) => {
      state.FilterProduct = state.FilterProduct.filter((item, index) => {
        return item.category === action.payload;
      });
    },
    filterByPrice: (state, action) => {
      if (action.payload === "asc")
        state.FilterProduct = state.FilterProduct.sort((a, b) => {
          return a.price - b.price;
        });
      if (action.payload === "des")
        state.FilterProduct = state.FilterProduct.sort((a, b) => {
          return b.price - a.price;
        });
    },
  },
});

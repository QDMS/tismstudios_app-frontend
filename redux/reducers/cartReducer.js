import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("addToCart", (state, action) => {
      const item = action.payload;
      const existingIndex = state.cartItems.findIndex((i) => i.service === item.service);

      if (existingIndex !== -1) {
        state.cartItems[existingIndex] = item;
      } else {
        state.cartItems.push(item);
      }
    })
    .addCase("removeFromCart", (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.service !== id);
    })
    .addCase("clearCart", (state) => {
      state.cartItems = [];
    });
});

import { configureStore } from "@reduxjs/toolkit";
import burgersReducer from "./slices/burgerSlice"
import cartReducer from "./slices/cartSlice"

export const store = configureStore({
  reducer: {
    burgers: burgersReducer,
    cart: cartReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import currencySlice from "./cart/currencySlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    currency: currencySlice,
  },
});

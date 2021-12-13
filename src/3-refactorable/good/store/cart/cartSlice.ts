import { createSlice } from "@reduxjs/toolkit";
import { ICartStateItem } from "../../types";

export const cartGlobal: ICartStateItem = {
  1: {
    product: "Flashlight",
    img: "https://via.placeholder.com/40",
    desc: "A really great flashlight",
    price: 100,
    currency: "usd",
  },
  2: {
    product: "Tin can",
    img: "https://via.placeholder.com/40",
    desc: "Pretty much what you would expect from a tin can",
    price: 32,
    currency: "usd",
  },
  3: {
    product: "Cardboard Box",
    img: "https://via.placeholder.com/40",
    desc: "It holds things",
    price: 5,
    currency: "usd",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartGlobal,
  reducers: {
    addToCard: (state: any, action): any => {
      return [...state, action.payload];
    },
  },
});

export const { addToCard } = cartSlice.actions;

export default cartSlice.reducer;

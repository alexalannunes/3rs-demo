import React from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "./store/cart/cartSlice";

const ButtonNew: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddNewProduct = () => {
    const newProduct = {
      [Date.now()]: {
        product: "Cat",
        img: "https://via.placeholder.com/40",
        desc: "Pretty much what you would expect from a tin can",
        price: 1,
        currency: "usd",
      },
    };
    dispatch(addToCard(newProduct));
  };
  return <button onClick={handleAddNewProduct}>New Product</button>;
};

export { ButtonNew };

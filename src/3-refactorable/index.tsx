import React from "react";

import { Cart as CartBad } from "./bad";
import { Cart as CartGood } from "./good";

const CartComponent = {
  bad: CartBad,
  good: CartGood,
};

const Cart = CartComponent["good"];

const Reusability: React.FC = () => {
  return (
    <div>
      <h1>Reusability</h1>
      <Cart />
    </div>
  );
};

export { Reusability };

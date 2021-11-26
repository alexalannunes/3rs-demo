import React from "react";

import { Cart as CartBad } from "./bad";
import { Cart as CartGood } from "./good";

const CartComponent = {
  bad: CartBad,
  good: CartGood,
};

const Cart = CartComponent["bad"];

const Refactorability: React.FC = () => {
  return (
    <div>
      <h1>Refactorability</h1>
      <Cart />
    </div>
  );
};

export { Refactorability };

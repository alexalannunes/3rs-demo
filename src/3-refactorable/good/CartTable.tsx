import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "./store/cart/cartSlice";
import { selectCurrency } from "./store/cart/currencySlice";
import { ICurrencyConverter } from "./types";

interface Props {
  CurrencyConverter: ICurrencyConverter;
}

const CartTable: React.FC<Props> = (props) => {
  const cart = useSelector(selectCart);
  const localCurrency = useSelector(selectCurrency);

  return (
    <div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          {Object.keys(cart).map((productId: any) => (
            <tr key={productId}>
              <td>{cart[productId].product}</td>
              <td>
                <img src={cart[productId].img} alt="product" />
              </td>
              <td>{cart[productId].desc}</td>
              <td>
                {props.CurrencyConverter.convert(
                  cart[productId].price,
                  cart[productId].currency,
                  localCurrency
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { CartTable };

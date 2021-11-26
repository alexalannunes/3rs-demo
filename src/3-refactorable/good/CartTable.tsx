import React, { useEffect, useState } from "react";
import { ICartState, ICurrencyConverter } from "./types";

interface Props extends ICartState {
  CurrencyConverter: ICurrencyConverter;
}

const CartTable: React.FC<Props> = (props) => {
  const [cart, setCart] = useState<ICartState>({
    localCurrency: props.localCurrency,
    products: props.products,
  });

  useEffect(() => {
    setCart((prev) => ({
      ...prev,
      localCurrency: props.localCurrency,
    }));
  }, [props]);

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
          {Object.keys(cart.products).map((productId: any) => (
            <tr key={productId}>
              <td>{cart.products[productId].product}</td>
              <td>
                <img src={cart.products[productId].img} alt="product" />
              </td>
              <td>{cart.products[productId].desc}</td>
              <td>
                {props.CurrencyConverter.convert(
                  cart.products[productId].price,
                  cart.products[productId].currency,
                  cart.localCurrency
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

import { useState } from "react";

interface CartStateItem {
  [id: number]: {
    product: string;
    img: string;
    desc: string;
    price: number;
    currency: string;
  };
}
interface CartState {
  localCurrency: string;
  products: CartStateItem;
}

const cartGlobal: CartState = {
  localCurrency: "usd",
  products: {
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
  },
};

const Cart: React.FC = () => {
  const [cart] = useState<CartState>(cartGlobal);
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
                <img src={cart.products[productId].img} alt="ima" />
              </td>
              <td>{cart.products[productId].desc}</td>
              <td>{cart.products[productId].price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Cart };

/**
 * Código que pode ser refatorado é um código que você pode alterar sem medo. É um código que você pode
 * implantar em uma sexta-feira à noite e voltar na segunda de manhã sem nenhuma preocupação de que seus
 * usuários encontrem erros de tempo de execução.
 * A refatorabilidade diz respeito ao sistema como um todo. É sobre como seus módulos reutilizáveis ​
 * ​se conectam como peças de LEGO. Se você alterar seu módulo Employee e de alguma forma ele
 * quebrar seu módulo Reporting, você saberá que tem alguns problemas de refatoração.
 * A refatorabilidade é a parte mais alta da hierarquia 3 R e é a mais difícil de alcançar e manter.
 * Sempre haverá problemas com qualquer sistema humano, e o código não é diferente.
 * No entanto, existem coisas que podemos fazer para tornar nosso código refatorável. Então, quais são eles?
 *
 * Efeitos colaterais isolados
 * Testes
 * Tipos estáticos
 */

import { ChangeEvent, useEffect, useRef, useState } from "react";

interface CartStateItem {
  product: string;
  img: string;
  desc: string;
  price: number;
  currency: string;
  id: number;
}
interface IProduct {
  product: string;
  img: string;
  desc: string;
  price: number;
  currency: string;
  id: number;
}

interface CartState {
  localCurrency: string;
  products: CartStateItem[];
}

interface CurrencyConversions {
  [from: string]: {
    [to: string]: number;
  };
}

interface CurrencySymbols {
  [currenyKey: string]: string;
}

declare global {
  interface Window {
    cart: IProduct[];
  }
}

const cartGlobal: CartState = {
  localCurrency: "usd",
  products: [
    {
      product: "Flashlight",
      img: "https://via.placeholder.com/40",
      desc: "A really great flashlight",
      price: 100,
      currency: "usd",
      id: 1,
    },
    {
      product: "Tin can",
      img: "https://via.placeholder.com/40",
      desc: "Pretty much what you would expect from a tin can",
      price: 32,
      currency: "usd",
      id: 2,
    },
    {
      product: "Cardboard Box",
      img: "https://via.placeholder.com/40",
      desc: "It holds things",
      price: 5,
      currency: "usd",
      id: 3,
    },
  ],
};

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartState>(cartGlobal);
  const watcherRef = useRef<number>();

  const currencyConversions: CurrencyConversions = {
    usd: {
      rupee: 66.78,
      yuan: 6.87,
      usd: 2,
    },
  };

  const currencySymbols: CurrencySymbols = {
    usd: "$",
    rupee: "₹",
    yuan: "元",
  };

  const onSelectCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    setCart((prev) => ({
      ...prev,
      localCurrency: e.target.value,
    }));
  };

  const convertCurrency = (
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ) => {
    const convertedCurrency =
      amount * currencyConversions[fromCurrency][toCurrency];
    return currencySymbols[toCurrency] + convertedCurrency;
  };

  const onAddToCartFake = () => {
    window.cart.push({
      product: "Cardboard Box",
      img: "https://via.placeholder.com/40",
      desc: "It holds things",
      price: (Math.random() * 10000) | 0,
      currency: "usd",
      id: (Math.random() * 10000) | 0,
    });
  };

  useEffect(() => {
    window.cart = window.cart || cartGlobal.products;

    watcherRef.current = window.setInterval(() => {
      setCart((prev) => ({
        ...prev,
        products: window.cart,
      }));
      console.log("log watcher", watcherRef.current);
    }, 1000);

    return () => {
      window.clearInterval(watcherRef.current);
    };
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="currencySelector">Currency:</label>
        <select id="currencySelector" onChange={(e) => onSelectCurrency(e)}>
          <option value="usd">USD</option>
          <option value="rupee">Rupee</option>
          <option value="yuan">Yuan</option>
        </select>
      </div>
      <br />
      <button onClick={onAddToCartFake}>Add new</button>
      <br />
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          {cart.products.map((product) => (
            <tr key={product.id}>
              <td>{product.product}</td>
              <td>
                <img src={product.img} alt="ima" />
              </td>
              <td>{product.desc}</td>
              <td>
                {convertCurrency(
                  product.price,
                  product.currency,
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

export { Cart };

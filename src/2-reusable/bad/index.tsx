/**
 * 2º Reutilização
 *
 * A capacidade de reutilização é a única razão pela qual você pode ler este código, comunicar-se com estranhos
 * online e até mesmo programar. A capacidade de reutilização nos permite expressar novas ideias com pequenos pedaços do passado.
 * É por isso que a reutilização é um conceito tão essencial que deve guiar sua arquitetura de software.
 * Normalmente pensamos na reutilização em termos de DRY (Don't Repeat Yourself).
 * Esse é um aspecto disso - não tenha código duplicado se puder abstraí-lo corretamente.
 * A reutilização vai além disso. Trata-se de fazer APIs claras e simples que fazem seu colega
 * programador dizer: "Sim, sei exatamente o que isso faz!" A capacidade de reutilização torna seu código
 * um prazer de trabalhar e significa que você pode enviar recursos com mais rapidez.
 *
 * Existem três problemas principais no código acima:
 *
 * O seletor de moeda é acoplado ao componente de estoque
 * O conversor de moeda é acoplado ao componente de estoque
 * Os dados de inventário são definidos explicitamente no componente de inventário e não são fornecidos ao componente em uma API.
 *
 */

import { ChangeEvent, useState } from "react";

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

interface CurrencyConversions {
  [from: string]: {
    [to: string]: number;
  };
}

interface CurrencySymbols {
  [currenyKey: string]: string;
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
  const [cart, setCart] = useState<CartState>(cartGlobal);

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
              <td>
                {convertCurrency(
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

export { Cart };

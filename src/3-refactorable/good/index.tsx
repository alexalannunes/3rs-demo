import { useState } from "react";
import { CartTable } from "./CartTable";
import { CurrencyConverter } from "./currencyConverter";
import { CurrencySelector } from "./CurrencySelector";
import { ICartStateItem, ICurrencyConversions } from "./types";

const cartGlobal: ICartStateItem = {
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

const Cart: React.FC = () => {
  const [localCurrency, setLocalCurrency] = useState("usd");
  const products = cartGlobal;

  const currencyConversions: ICurrencyConversions = {
    usd: {
      rupee: 66.78,
      yuan: 6.87,
      usd: 2,
    },
  };

  const onSelectCurrency = (currency: string) => {
    setLocalCurrency(currency);
  };

  return (
    <div>
      <CurrencySelector
        localCurrency={localCurrency}
        setGlobalCurrency={onSelectCurrency}
      />
      <br />
      <CartTable
        products={products}
        localCurrency={localCurrency}
        CurrencyConverter={new CurrencyConverter(currencyConversions)}
      />
    </div>
  );
};

export { Cart };

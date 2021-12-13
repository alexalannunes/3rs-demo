import { useState } from "react";
import { CartTable } from "./CartTable";
import { CurrencyConverter } from "./currencyConverter";
import { CurrencySelector } from "./CurrencySelector";
import { cartGlobal } from "./store/cart/cartSlice";
import { ICurrencyConversions } from "./types";

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

import { useSelector } from "react-redux";
import { CartTable } from "./CartTable";
import { CurrencyConverter } from "./currencyConverter";
import { CurrencySelector } from "./CurrencySelector";
import { ICurrencyConversions } from "./types";

const Cart: React.FC = () => {
  const currencyConversions: ICurrencyConversions = {
    usd: {
      rupee: 66.78,
      yuan: 6.87,
      usd: 2,
    },
  };

  return (
    <div>
      <CurrencySelector />
      <br />
      <CartTable
        CurrencyConverter={new CurrencyConverter(currencyConversions)}
      />
    </div>
  );
};

export { Cart };

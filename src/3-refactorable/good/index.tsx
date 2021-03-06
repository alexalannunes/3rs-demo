import { ButtonNew } from "./ButtonNew";
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
      brl: 5.5,
    },
  };

  return (
    <div>
      <CurrencySelector />
      <br />
      <ButtonNew />
      <hr />
      <CartTable
        CurrencyConverter={new CurrencyConverter(currencyConversions)}
      />
    </div>
  );
};

export { Cart };

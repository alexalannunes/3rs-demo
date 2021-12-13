import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrency, setCurrency } from "./store/cart/currencySlice";

const CurrencySelector: React.FC = (props) => {
  const currencyStore = useSelector(selectCurrency);
  const [localCurrency, setLocalCurrency] = useState(currencyStore);

  const dispatch = useDispatch();

  const onSelectCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    const currency = event.target.value;
    setLocalCurrency(currency);
    dispatch(setCurrency({ currency }));
  };
  return (
    <div>
      <label htmlFor="currencySelector">Currency:</label>
      <select
        id="currencySelector"
        onChange={(e) => onSelectCurrency(e)}
        value={localCurrency}
      >
        <option value="usd">USD</option>
        <option value="rupee">Rupee</option>
        <option value="yuan">Yuan</option>
        <option value="brl">BRL</option>
      </select>
    </div>
  );
};

export { CurrencySelector };

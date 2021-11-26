import React, { ChangeEvent, useState } from "react";

interface Props {
  localCurrency: string;
  setGlobalCurrency: (currency: string) => void;
}

const CurrencySelector: React.FC<Props> = (props) => {
  const [localCurrency, setLocalCurrency] = useState(props.localCurrency);

  const onSelectCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    const currency = event.target.value;
    props.setGlobalCurrency(currency);
    setLocalCurrency(currency);
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
      </select>
    </div>
  );
};

export { CurrencySelector };

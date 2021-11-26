export interface ICurrencyConversions {
  [from: string]: {
    [to: string]: number;
  };
}

export interface ICurrencySymbols {
  [currenyKey: string]: string;
}

export interface ICartStateItem {
  [id: number]: {
    product: string;
    img: string;
    desc: string;
    price: number;
    currency: string;
  };
}

export interface ICartState {
  localCurrency: string;
  products: ICartStateItem;
}

export interface ICurrencyConverter {
  convert(amount: number, fromCurrency: string, toCurrency: string): string;
}

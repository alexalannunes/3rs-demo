import { ICurrencyConversions, ICurrencySymbols } from "./types";

export class CurrencyConverter {
  currencyConversions: ICurrencyConversions;
  currencySymbols: ICurrencySymbols;

  constructor(currencyConversions: ICurrencyConversions) {
    this.currencyConversions = currencyConversions;
    this.currencySymbols = {
      usd: "$",
      rupee: "₹",
      yuan: "元",
      brl: "R$ ",
    };
  }

  convert(amount: number, fromCurrency: string, toCurrency: string): string {
    const convertedCurrency =
      amount * this.currencyConversions[fromCurrency][toCurrency];
    return this.currencySymbols[toCurrency] + convertedCurrency;
  }
}

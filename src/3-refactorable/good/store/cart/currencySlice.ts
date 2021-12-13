import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "cart",
  initialState: "usd",
  reducers: {
    setCurrency: (_, action): any => {
      return action.payload.currency;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export const selectCurrency = (state: any) => state.currency;
export default currencySlice.reducer;

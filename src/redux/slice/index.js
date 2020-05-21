import { createSlice, createStore } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
  inCartValue: [],
};

const stateShop = createSlice({
  name: "product",
  initialState,
  reducers: {
    plus: (state, action) => {
      state.amount += 1;
    },
    minus: (state, action) => {
      if (state.amount === 0) {
        return;
      }
      state.amount -= 1;
    },
    setColor: (state, colors) => {
      //   console.log(event.target);
      //   const color = (e) => {
      //     console.log(e.target);
      //   };
      state.inCartValue.push(colors.payload);
    },
  },
});

export const { plus, minus, setColor } = stateShop.actions;
export const amount = (state) => state.product.amount;
export const inCartProduct = (state) => state.product.inCartValue;

export default stateShop.reducer;

import { createReducer } from "@reduxjs/toolkit";
import item from "../db/item.json";
import {
  addToCart,
  plusAmountItem,
  minusAmountItem,
  totalAmount,
  totalPrice,
  deleteToCart,
} from "./action";
const initialStateShop = [];

export const cartReducer = createReducer(initialStateShop, {
  [addToCart]: (state, { payload }) => [...state, payload],

  [plusAmountItem]: (state, { payload }) => {
    state[payload] = {
      ...state[payload],
      amountInCart: state[payload].amountInCart + 1,
    };
  },
  [minusAmountItem]: (state, { payload }) => {
    state[payload] = {
      ...state[payload],
      amountInCart:
        state[payload].amountInCart > 1 ? state[payload].amountInCart - 1 : 0,
    };
  },
  [deleteToCart]: (state, { payload }) => {
    state.splice(payload, 1);
  },
});

import { createReducer } from "@reduxjs/toolkit";
import {
  addToShop,
  getItems,
  deleteItem,
  updateItem,
  sortItem,
} from "./action";

const initialState = [];

export const listShopReducer = createReducer(initialState, {
  [addToShop]: (state, { payload }) => [...state, payload],
  [getItems]: (state, action) => [...state, ...action.payload],
  [deleteItem]: (state, action) =>
    state.filter((doc) => doc.id !== action.payload),
  [updateItem]: (state, action) =>
    state.map((item) =>
      item.id === action.payload.id ? action.payload : item,
    ),
  [sortItem]: (state, action) => {
    state.sort((a, b) => {
      let newState;
      switch (action.payload) {
        case "за збільшенням ціни":
          newState = b.price - a.price;
          return newState;
        case "за зменшенням ціни":
          newState = a.price - b.price;
          return newState;

        default:
          return state;
      }
    });
  },
});

import { createReducer } from "@reduxjs/toolkit";
import { addToShop, getItems, deleteItem, updateItem } from "./action";

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
});

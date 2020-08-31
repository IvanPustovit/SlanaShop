import { createReducer } from "@reduxjs/toolkit";
import { addContacts, addOperatingMode, getContacts } from "./action";

const initialState = "";

export const footerReducer = createReducer(initialState, {
  [addContacts]: (state, action) => [...state, action.payload],
  [getContacts]: (state, action) => [...state, ...action.payload],
  [addOperatingMode]: (state, action) => action.payload,
});

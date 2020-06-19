import { createReducer } from "@reduxjs/toolkit";
import { addContacts, addOperatingMode } from "./action";

const initialState = "";

export const footerReducer = createReducer(initialState, {
  [addContacts]: (state, action) => action.payload,
  [addOperatingMode]: (state, action) => action.payload,
});

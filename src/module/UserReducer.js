import { createReducer } from "@reduxjs/toolkit";
import { setUser } from "./action";

export const userReducer = createReducer("", {
  [setUser]: (state, action) => action.payload,
});

import { createReducer } from "@reduxjs/toolkit";
import { setUser, deleteUser } from "./action";

export const userReducer = createReducer("", {
  [setUser]: (state, action) => action.payload,
  [deleteUser]: (state, action) => null,
});

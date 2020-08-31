import { addFilter, resetFilter, sortItem } from "./action";

const { createReducer } = require("@reduxjs/toolkit");

export const filterReducer = createReducer("", {
  [addFilter]: (state, action) => action.payload,
  [resetFilter]: (state, action) => (state = ""),
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

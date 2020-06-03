// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { inCartValue: [] },
  devTools: process.env.NODE_ENV !== "production",
});

// import { devToolsEnhancer } from "redux-devtools-extension";
// import rootReducer from "../reducers";
// import product from "../slice/index";
// const rootReducer = { product };
// const globalState = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== "production",
// });

// // (rootReducer, devToolsEnhancer());

// export default globalState;

export default store;

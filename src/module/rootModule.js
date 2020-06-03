import { combineReducers } from "redux";
import { cartReducer } from "./reducer";

const rootReducer = combineReducers({
  inCart: cartReducer,
});

export default rootReducer;

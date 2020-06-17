import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { listShopReducer } from "./ListShopReducer";
import { userReducer } from "./UserReducer";

const rootReducer = combineReducers({
  inCart: cartReducer,
  listShop: listShopReducer,
  user: userReducer,
});

export default rootReducer;

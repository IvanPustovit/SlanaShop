import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { listShopReducer } from "./ListShopReducer";
import { userReducer } from "./UserReducer";
import { footerReducer } from "./footerReducer";

const rootReducer = combineReducers({
  inCart: cartReducer,
  listShop: listShopReducer,
  user: userReducer,
  footerContact: footerReducer,
});

export default rootReducer;

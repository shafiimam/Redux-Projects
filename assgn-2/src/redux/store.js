import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { productReducer } from "./product/productReducer";

const reducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const store = createStore(reducer);

export default store;

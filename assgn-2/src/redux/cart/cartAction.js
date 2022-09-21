import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActionTypes";

export const addToCart = (product) => {
  console.log({ product });
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

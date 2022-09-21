import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActionTypes";

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: state.items.find((prod) => prod.id === action.payload.id)
          ? state.items.map((dt) =>
              dt.id === action.payload.id
                ? { ...dt, qty: dt.qty + 1 }
                : { ...dt }
            )
          : [...state.items, { ...action.payload, qty: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.items.filter((dt) => action.payload.id),
      };
    default:
      return state;
  }
};

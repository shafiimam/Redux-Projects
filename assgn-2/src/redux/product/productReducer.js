import { GET_PRODUCTS } from "./productActionTypes";

const initialState = {
  items: [
    {
      id: 1,
      title: "Mackbook Pro 2022",
      price: 250000,
      qty: 10,
    },
    {
      id: 2,
      title: "Vivobook ",
      price: 75000,
      qty: 20,
    },
    {
      id: 3,
      title: "MSI Optix",
      price: 52000,
      qty: 7,
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return state.products;

    default:
      return state;
  }
};

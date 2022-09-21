import blogList from './initialState';
import { GET_BLOGS } from "./actionTypes";
const initialState = blogList;
const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return state;
    default:
      return state;
  }
}

export default blogsReducer;

import { FILTER_BY_AUTHOR, FILTER_BY_CATEGORY, SEARCH_BLOG, CLEAR_FILTER } from './actionTypes';
const initialState = {
  category: '',
  author: '',
  searchKeyword: '',
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case FILTER_BY_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };
    case SEARCH_BLOG:
      return {
        ...state,
        searchKeyword: action.payload,
      };
    case CLEAR_FILTER:
      return {
        category: '',
        author: '',
        searchKeyword: '',
      };
    default:
      return state;
  }
}

export default filterReducer;
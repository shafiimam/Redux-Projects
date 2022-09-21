import { createStore } from 'redux';
import blogsReducer from "./blogs/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import filterReducer from './filters/reducers';
import { combineReducers } from 'redux';
const reducers = combineReducers({ blogs: blogsReducer, filters: filterReducer });
const store = createStore(reducers, composeWithDevTools());

export default store;


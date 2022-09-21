import { FILTER_BY_AUTHOR, SEARCH_BLOG, CLEAR_FILTER, FILTER_BY_CATEGORY } from "./actionTypes"

export const filterByCategory = (category) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category
  }
}


export const filterByAuthor = (author) => {
  return {
    type: FILTER_BY_AUTHOR,
    payload: author
  }
}

export const searchBlog = (keyword) => {
  return {
    type: SEARCH_BLOG,
    payload: keyword
  }
}

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  }
}
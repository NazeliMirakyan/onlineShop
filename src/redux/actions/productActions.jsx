import ActionTypes from "../constants/actionTypes";
  
  export const getAllProductsList = (data) => {
    return {
      type: ActionTypes.GET_ALL_PRODUCT_LIST,
      payload: data,
    };
  };
  
  export const getSingleProductById = (id) => {
    return {
      type: ActionTypes.GET_SINGLE_PRODUCT,
      payload: id,
    };
  };
  
  export const productCategories = (data) => {
    return {
      type: ActionTypes.GET_ALL_CATEGORIES,
      payload: data,
    };
  };
  
  export const sortByCategory = (category) => {
    return {
      type: ActionTypes.SORT_BY_CATEGORY,
      payload: category,
    };
  };
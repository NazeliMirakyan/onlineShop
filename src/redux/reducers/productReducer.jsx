import ActionTypes from "../constants/actionTypes";

const initialState = {
  productList: [],
  categoryNames: [],
  categoryList: [],
  singleItem: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case ActionTypes.GET_ALL_CATEGORIES:
      return {
        ...state,
        categoryNames: action.payload,
      };
    case ActionTypes.SORT_BY_CATEGORY:
      return {
        ...state,
        categoryList: action.payload,
      };
    case ActionTypes.GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleItem: action.payload,
      };
    default:
      return state;
  }
};

import {
  allCategories,
  products,
  singleProduct,
  specificCategory,
} from "../../utils/api";
import {
  getAllProductsList,
  getSingleProductById,
  productCategories,
  sortByCategory,
} from "../actions/productActions";

const fetchDataAndDispatch = async (url, actionCreator, dispatch) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await response.json();
    dispatch(actionCreator(json));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getProducts = () => {
  return async (dispatch) => {
    await fetchDataAndDispatch(products(), getAllProductsList, dispatch);
  };
};

export const getSingleProduct = (id) => {
  return async (dispatch) => {
    await fetchDataAndDispatch(singleProduct(id), getSingleProductById, dispatch);
  };
};

export const getAllCategories = () => {
  return async (dispatch) => {
    await fetchDataAndDispatch(allCategories(), productCategories, dispatch);
  };
};

export const getSpecificCategory = (category) => {
  return async (dispatch) => {
    await fetchDataAndDispatch(specificCategory(category), sortByCategory, dispatch);
  };
};
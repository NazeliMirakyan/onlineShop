import {
  PRODUCT_API_URL,
  SINGLE_PRODUCT_API_URL,
  CATEGORY_API_URL,
  SPECIFIC_CATEGORY_API_URL,
} from "../constants/urls";

const products = () => PRODUCT_API_URL;
const singleProduct = (id) => `${SINGLE_PRODUCT_API_URL}/${id}`;
const allCategories = () => CATEGORY_API_URL;
const specificCategory = (category) => `${SPECIFIC_CATEGORY_API_URL}/${category}`;

export {
  products,
  singleProduct,
  allCategories,
  specificCategory
};

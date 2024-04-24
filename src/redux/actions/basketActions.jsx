import ActionTypes from "../constants/actionTypes";

export const addToBasket = (product) => {
  return {
    type: ActionTypes.ADD_TO_BASKET,
    payload: product,
  };
};

export const deleteFromBasket = (id) => {
  return {
    type: ActionTypes.DELETE_FROM_BASKET,
    payload: id,
  };
};

export const adjustQty = (itemId, qty) => {
  console.log(qty);
  return {
    type: ActionTypes.ADJUST_ITEM_QUANTITY,
    payload: {
      id: itemId,
      qty,
    },
  };
};
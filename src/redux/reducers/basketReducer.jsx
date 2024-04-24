import ActionTypes from "../constants/actionTypes";

const initialState = {
  itemQuantity: 0,
  basketList: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_BASKET:
      const inBasket = state.basketList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (inBasket !== -1) {
        const updatedBasket = [...state.basketList];
        updatedBasket[inBasket].quantity += 1;
        return {
          ...state,
          itemQuantity: state.itemQuantity + 1,
          basketList: updatedBasket,
        };
      } else {
        return {
          ...state,
          itemQuantity: state.itemQuantity + 1,
          basketList: [...state.basketList, { ...action.payload, quantity: 1 }],
        };
      }
    case ActionTypes.ADJUST_ITEM_QUANTITY:
      const itemIndex = state.basketList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        const updatedBasket = [...state.basketList];
        const oldQuantity = updatedBasket[itemIndex].quantity;
        const newQuantity = action.payload.qty;
        updatedBasket[itemIndex].quantity = newQuantity;
        return {
          ...state,
          itemQuantity:
            state.itemQuantity +
            (parseInt(newQuantity, 10) - parseInt(oldQuantity, 10)),
          basketList: updatedBasket,
        };
      }
      return state;
    case ActionTypes.DELETE_FROM_BASKET:
      const deletedItem = state.basketList.find(
        (item) => item.id === action.payload
      );
      const quantityOfDeletedItem = deletedItem ? deletedItem.quantity : 0;
      return {
        ...state,
        itemQuantity: state.itemQuantity - quantityOfDeletedItem,
        basketList: state.basketList.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

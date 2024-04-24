import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "../reducers/productReducer";
import { basketReducer } from "../reducers/basketReducer";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const rootReducerCombined = combineReducers({
  basketReducer,
  productReducer,
});

const store = createStore(
  rootReducerCombined,
  persistedState,
  applyMiddleware(thunk)
);
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;

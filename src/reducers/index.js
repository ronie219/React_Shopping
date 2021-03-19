import { combineReducers } from "redux";

const ShopingListReducer = (state = [], action) => {
  switch (action.type) {
    case "SHOPPING_LIST":
      return action.payload;
    default:
      return state;
  }
};

const ItemDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "ITEM_DETAIL":
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  ShopingListReducer,
  ItemDetailsReducer,
});

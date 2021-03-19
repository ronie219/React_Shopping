import Axios from "axios";

export const ShoppingListCreator = () => async (dispatch) => {
  const response = await Axios.get("http://localhost:3004/items/");
  dispatch({
    type: "SHOPPING_LIST",
    payload: response,
  });
};

export const ItemDetailsCreator = (id) => async (dispatch) => {
  const response = await Axios.get(`http://localhost:3004/items/${id}`);
  dispatch({
    type: "ITEM_DETAIL",
    payload: response,
  });
};

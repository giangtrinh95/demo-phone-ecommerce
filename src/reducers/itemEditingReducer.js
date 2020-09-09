import * as Types from "../constants/ActionTypes";
import { toastError } from "../helpers/toastHelper";

const initialState = {};

const itemEditingReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCT_SUCCESS: {
      const { product } = action.payload;
      state = product;
      return { ...state };
    }
    case Types.GET_PRODUCT_FAILED: {
      const { error } = action.payload;
      if (error.response.status === 404) {
        toastError("Không có dữ liệu sản phẩm");
      }
      return { ...state };
    }
    case Types.CLEAR_PRODUCT_ITEM: {
      state = {};
      return { ...state };
    }
    default:
      return state;
  }
};
export default itemEditingReducer;

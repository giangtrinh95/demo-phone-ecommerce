import * as Types from "../constants/ActionTypes";
import { toastError, toastSuccess } from "../helpers/toastHelper";

const initialState = [];

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CLEAR_PRODUCT: {
      state = [];
      return [...state];
    }
    // case Types.SHOW_PRODUCT_SUCCESS: {
    //   const { data } = action.payload;
    //   state = data;
    //   return [...state];
    // }
    // case Types.SHOW_PRODUCT_FAILED: {
    //   const { error } = action.payload;
    //   toastError(error.response.data.message);
    //   return [...state];
    // }
    case Types.DELETE_PRODUCT_SUCCESS: {
      const newState = state.filter((product) => product.id !== action.payload.id);
      toastSuccess("Xóa sản phẩm thành công");
      return [...newState];
    }
    case Types.DELETE_PRODUCT_FAILED: {
      // const { error } = action.payload;
      // toastError(error.response.data.message);
      toastError("Xóa sản phẩm thất bại");
      return [...state];
    }
    case Types.UPDATE_PRODUCT_SUCCESS: {
      const { product } = action.payload;
      let index = state.findIndex((item) => item.id === product.id);
      const newState = [...state.slice(0, index), product, ...state.slice(index + 1)];
      toastSuccess("Cập nhật sản phẩm thành công");
      return [...newState];
    }
    case Types.UPDATE_PRODUCT_FAILED: {
      // const { error } = action.payload;
      // toastError(error.response.data.message);
      toastError("Cập nhật sản phẩm thất bại");

      return [...state];
    }
    case Types.ADD_PRODUCT_SUCCESS: {
      const { product } = action.payload;
      state.push(product);
      toastSuccess("Thêm  sản phẩm thành công");
      return [...state];
    }
    case Types.ADD_PRODUCT_FAILED: {
      // const { error } = action.payload;
      // toastError(error.response.data.message);
      toastError("Thêm sản phẩm thất bại");
      return [...state];
    }
    case Types.SHOW_PRODUCT_LIST_PAGE_SUCCESS: {
      const { data } = action.payload;
      state = data;
      return [...state];
    }
    case Types.SHOW_PRODUCT_LIST_PAGE_FAILED: {
      // const { error } = action.payload;
      toastError("Không có dữ liệu sản phẩm");
      return [...state];
    }

    default:
      return state;
  }
};
export default contentReducer;

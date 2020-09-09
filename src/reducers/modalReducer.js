import * as Types from "../constants/ActionTypes";

const initialState = {
  visibleDelete: false,
  productId: "",
  productName: "",
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_MODAL_DELETE: {
      const { id, name } = action.payload;
      return {
        ...state,
        visibleDelete: true,
        productId: id,
        productName: name,
      };
    }
    case Types.HIDE_MODAL_DELETE: {
      return {
        ...state,
        visibleDelete: false,
        productId: "",
        productName: "",
      };
    }

    default:
      return state;
  }
};
export default modalReducer;

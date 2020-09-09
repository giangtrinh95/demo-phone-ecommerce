import * as Types from "../constants/ActionTypes";

const initialState = {
  loadingUI: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_LOADING_UI: {
      return {
        ...state,
        loadingUI: true,
      };
    }
    case Types.HIDE_LOADING_UI: {
      return {
        ...state,
        loadingUI: false,
      };
    }
    default:
      return state;
  }
};
export default loadingReducer;

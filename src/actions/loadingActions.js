import * as Types from "../constants/ActionTypes";

export const showLoadingUI = () => {
  return {
    type: Types.SHOW_LOADING_UI,
  };
};

export const hideLoadingUI = () => {
  return {
    type: Types.HIDE_LOADING_UI,
  };
};

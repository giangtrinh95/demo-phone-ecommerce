import * as Types from "../constants/ActionTypes";
import callApi from "../utils/callApi";
import * as ui from "./loadingActions";
export const login = (value) => (dispatch) => {
  dispatch(ui.showLoadingUI());
  return callApi("auth/login", "POST", value)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch(loginSucess(res.data.token));
      dispatch(ui.hideLoadingUI());
    })
    .catch((error) => {
      dispatch(loginFailed(error));
      dispatch(ui.hideLoadingUI());
    });
};

export const loginSucess = (data) => {
  return {
    type: Types.LOGIN_SUCCESS,
    payload: {
      data,
    },
  };
};
export const loginFailed = (error) => {
  return {
    type: Types.LOGIN_FAILED,
    payload: {
      error,
    },
  };
};

export const logout = () => {
  return {
    type: Types.LOGOUT,
  };
};

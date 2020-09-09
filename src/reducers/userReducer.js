import * as Types from "../constants/ActionTypes";
import jwt from "jwt-decode";
import { toastError } from "../helpers/toastHelper";
const initialState = {
  isLoggedIn: false,
  name: "",
  role: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_SUCCESS: {
      const { data } = action.payload;
      const decoded = jwt(data);

      return {
        ...state,
        isLoggedIn: true,
        name: decoded.username,
        role: decoded.role,
      };
    }
    case Types.LOGIN_FAILED: {
      const { error } = action.payload;
      console.log(error.response.data.message);
      toastError(error.response.data.message);
      return { ...state };
    }
    case Types.LOGOUT: {
      localStorage.clear("token");
      return {
        ...state,
        isLoggedIn: false,
        name: "",
        role: null,
      };
    }

    default:
      return state;
  }
};
export default userReducer;

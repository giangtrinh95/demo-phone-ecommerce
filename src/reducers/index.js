import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";
import contentReducer from "./contentReducer";
import itemEditingReducer from "./itemEditingReducer";
import modalReducer from "./modalReducer";
const rootReducer = combineReducers({
  userReducer,
  loadingReducer,
  contentReducer,
  itemEditingReducer,
  modalReducer,
});
export default rootReducer;

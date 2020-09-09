import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "./styles/styles.less";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { loginSucess, logout } from "./actions/userActions";
import jwt from "jwt-decode";

const store = configureStore();
const token = localStorage.getItem("token");

if (token) {
  store.dispatch(loginSucess(token));
  const decoded = jwt(token);
  const { exp } = decoded;
  if (new Date(exp * 1000) < Date.now()) {
    store.dispatch(logout());
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "../privateRoute/PrivateRoute";
import routes from "../routes";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export default class App extends Component {
  componentDidUpdate() {
    console.log("a");
  }
  render() {
    return (
      <>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Router>
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/">
              <HomePage routes={routes} />
            </PrivateRoute>
          </Switch>
        </Router>
      </>
    );
  }
}

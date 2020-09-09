import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = ({ children, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return isLoggedIn ? children : <Redirect to="/login" />;
      }}
    ></Route>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(PrivateRoute);

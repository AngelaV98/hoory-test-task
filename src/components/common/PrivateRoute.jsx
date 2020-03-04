import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ isLoggedIn, component: Component, data, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? <Component data={data} {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});
export default connect(mapStateToProps)(PrivateRoute);
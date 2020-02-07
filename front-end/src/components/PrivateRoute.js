import React from "react";
import { Route, Redirect } from "react-router-dom";

<<<<<<< HEAD
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
=======
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("userToken") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

>>>>>>> 46e03535f328468f13ab7b6765bbce2d9ff37035
export default PrivateRoute;

import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { Context } from "../../Context/Context";

// Allowing users to navigate to pages if logged in

const PrivateRoute = ({ children, ...rest }) => {
  const { loginStatus } = useContext(Context);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loginStatus ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

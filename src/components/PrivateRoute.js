import React from "react";
import { Redirect, Route } from "react-router";

export default function PrivateRoute({ children, ...rest }) {
  const auth = localStorage.getItem("loggedIn");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth === "true" ? (
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
}

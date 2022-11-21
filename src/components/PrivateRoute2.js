import React from "react";
import { Redirect, Route } from "react-router";

export default function PrivateRoute2({ children, ...rest }) {
  const auth = localStorage.getItem("loggedIn");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth === "false" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

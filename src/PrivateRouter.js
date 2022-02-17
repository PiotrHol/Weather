import { Route, Redirect } from "react-router-dom";

export const PrivateRouter = ({ children, ...rest }) => {
  const isAuth = false;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: location,
              },
            }}
          />
        )
      }
    />
  );
};

import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRouter = ({ children, ...rest }) => {
  const isAuth = useSelector(state => state.auth.id);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
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

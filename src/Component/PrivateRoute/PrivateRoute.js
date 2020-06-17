import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// import { isAuth } from "../../redux/selectors";

const PrivateRoute = ({ component, ...rest }) => {
  const userSelector = (state) => state.user;
  const isAuth = useSelector((state) => !!state.user);
  // (state) => !!userSelector(state);
  const Page = component;
  //   const isAuthUser = useSelector((state) => isAuth(state));
  console.log(isAuth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Page {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

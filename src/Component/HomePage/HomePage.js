import React, { useEffect, lazy, Suspense } from "react";
import Header from "../Header/Header";
import { Route, useHistory, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { readDataFromFirebase } from "../../utils/axios/firebase";
import { auth } from "../../firebaseConfig";
import { setUser } from "../../module/action";

const admin = lazy(() => import("../../Page/Admin"));
const home = lazy(() => import("../../Page/Home"));
const CartList = lazy(() => import("../CartList/CartList"));
const Login = lazy(() => import("../../Page/Login"));

const HomePage = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readDataFromFirebase("shop"));
    auth.onAuthStateChanged((user) => {
      if (user) {
        const providerData = user.providerData;
        dispatch(setUser(providerData[0].email));
        history.push("/admin");
      } else {
        history.push("/") && history.push("/login");
      }
    });
  }, []);

  return (
    <div>
      {/* <CardItemModal /> */}
      <Header />
      <Suspense fallback="...Loading">
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/cart" component={CartList} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={admin} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default HomePage;

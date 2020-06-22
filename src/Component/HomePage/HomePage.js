import React, { useEffect, lazy, Suspense } from "react";
import Header from "../Header/Header";
import { Route, useHistory, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readDataFromFirebase } from "../../utils/axios/firebase";
import { auth } from "../../firebaseConfig";
import { setUser } from "../../module/action";
// import CardItemModal from "../CardIteamModal/CardItemModal";

const admin = lazy(() => import("../../Page/Admin"));
const home = lazy(() => import("../../Page/Home"));
const CartList = lazy(() => import("../CartList/CartList"));
const Login = lazy(() => import("../../Page/Login"));
const CardItemModal = lazy(() => import("../CardIteamModal/CardItemModal"));

const HomePage = (props) => {
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readDataFromFirebase("shop"));
    auth.onAuthStateChanged((user) => {
      if (user) {
        const providerData = user.providerData;
        dispatch(setUser(providerData[0].email));
        history.push("/admin");
      }
      if (history.location.pathname === "/admin" && !user) {
        history.push("/login");
      } else {
        history.push(history.location.pathname);
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
          <Route path="/:id" component={CardItemModal} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default HomePage;

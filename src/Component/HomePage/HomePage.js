import React, { useEffect } from "react";
import Header from "../Header/Header";

import CartList from "../CartList/CartList";
// import CardItemModal from "../CardIteamModal/CardItemModal";
import { Route, useHistory, Switch } from "react-router-dom";
// import { Switch } from "@material-ui/core";
import Home from "../../Page/Home";
import Admin from "../../Page/Admin";
import { useDispatch } from "react-redux";
import { readDataFromFirebase } from "../../utils/axios/firebase";
import Login from "../../Page/Login";
import { auth } from "../../firebaseConfig";
import { setUser } from "../../module/action";

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
        history.push("/login");
      }
    });
  }, []);

  return (
    <div>
      {/* <CardItemModal /> */}
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={CartList} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
};

export default HomePage;

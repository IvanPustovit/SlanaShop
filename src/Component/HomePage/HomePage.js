import React from "react";
import Header from "../Header/Header";

import CartList from "../CartList/CartList";
// import CardItemModal from "../CardIteamModal/CardItemModal";
import { Route } from "react-router-dom";
// import { Switch } from "@material-ui/core";
import Home from "../../Page/Home";

const HomePage = () => {
  return (
    <div>
      {/* <CardItemModal /> */}
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={CartList} />
    </div>
  );
};

export default HomePage;

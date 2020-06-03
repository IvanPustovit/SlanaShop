import React from "react";
import classes from "./Cart.module.css";

import { useSelector } from "react-redux";

const Cart = () => {
  const bag = [classes.Bag];
  const cart = [classes.Cart];
  const inCartArr = useSelector((state) => state.inCart);

  if (true) {
    cart.push(classes["Cart-open"]);
  }

  const totalCount = inCartArr.reduce((acc, el) => acc + el.amountInCart, 0);
  return (
    <>
      <span className={bag.join(" ")}>
        <span className={classes.Quantity}>{totalCount}</span>
      </span>
    </>
  );
};

export default Cart;

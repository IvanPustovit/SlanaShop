import React from "react";
import classes from "./Cart.module.css";

const Cart = () => {
  const bag = [classes.Bag];
  const cart = [classes.Cart];
  if (true) {
    cart.push(classes["Cart-open"]);
  }
  //   const total = cartCollection
  //     .reduce((acc, el) => acc + el.price * el.amount, 0)
  //     .toFixed(2);
  //   const totalCount = cartCollection.reduce((acc, el) => acc + el.amount, 0);
  return (
    // <div className={cart.join(" ")}>
    <span className={bag.join(" ")} onClick="{toggleCart}">
      <span className={classes.Quantity}>""</span>
    </span>
    //   <div className={classes.Content}>
    //     <div className={classes.Container}>
    //       {/* {cartCollection.map((el, index) => (
    //         <CartItem
    //           {...el}
    //           deleteFromCart={deleteFromCart}
    //           index={index}
    //           editCartItem={editCartItem}
    //           key={el.id}
    //         />
    //       ))} */}
    //     </div>
    //     <div className={classes.Footer}>
    //       <div className={classes.Total}>
    //         <p className={classes.Sub}>TOTAL</p>
    //         <p className={classes["Total-amount"]}>$ total</p>
    //       </div>
    //       <div className={classes["Buy-btn"]} onClick="{toggleModal}">
    //         Checkout
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Cart;

import React from "react";
import classes from "../Cart/Cart.module.css";
import CartItem from "../CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { inCartProduct } from "../../redux/slice";

import "./CartList.css";

const CartList = (props) => {
  const cartArr = useSelector(inCartProduct);
  console.log(props);
  const bag = [classes.Bag];
  const cart = [classes.Cart];
  return (
    // <div className={cart.join(" ")}>
    // <div className={classes.Content}>
    <div className={classes.Container}>
      <ul className="cart-list">
        {cartArr.length > 0 &&
          cartArr.map((prod) => <CartItem {...prod} key={prod.article} />)}
      </ul>
      {/* {cartCollection.map((el, index) => (
            <CartItem
              {...el}
              deleteFromCart={deleteFromCart}
              index={index}
              editCartItem={editCartItem}
              key={el.id}
            />
          ))} */}
      <div className={classes.Footer}>
        <div className={classes.Total}>
          <p className={classes.Sub}>TOTAL</p>
          <p className={classes["Total-amount"]}>$ total</p>
        </div>
        <div>
          <form action="" method="post">
            <input
              type="email"
              name="email"
              id="mail"
              placeholder="Your Email"
            />
            <input
              type="tel"
              name="tel"
              id="phone"
              placeholder="Your Phone number"
            />
          </form>
        </div>
        <div className={classes["Buy-btn"]}>Замовити</div>
      </div>
    </div>
    //{" "}
    // {/* <div className={classes.Footer}>
    //     <div className={classes.Total}>
    //       <p className={classes.Sub}>TOTAL</p>
    //       <p className={classes["Total-amount"]}>$ total</p>
    //     </div>
    //     <div className={classes["Buy-btn"]} onClick="{toggleModal}">
    //       Checkout
    //     </div>
    //   </div> */}
    //{" "}
    // </div>
    // </div>
  );
};

export default CartList;

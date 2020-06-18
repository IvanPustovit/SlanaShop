import React, { useState } from "react";
import classes from "../Cart/Cart.module.css";
import CartItem from "../CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
// import { inCartProduct } from "../../redux/slice";

import "./CartList.css";
import Axios from "axios";
// import { fib } from "../../utils/axios/firebase";

const CartList = (props) => {
  const [form, setForm] = useState([]);
  const cartArr = useSelector((state) => state.inCart);

  const totalAmount = cartArr.reduce(function (sum, el) {
    return sum + el.amountInCart;
  }, 0);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const submitTitle = (e) => {
    e.preventDefault();
    // const res = fib();
    console.log(typeof res);

    console.log([...cartArr, form]);
  };
  const totalPrice = cartArr.reduce((sum, el) => {
    return sum + el.amountInCart * el.price;
  }, 0);

  const bag = [classes.Bag];
  const cart = [classes.Cart];
  return (
    // <div className={cart.join(" ")}>
    // <div className={classes.Content}>
    <div className={classes.Container}>
      <ul className="cart-list">
        {cartArr.length > 0 &&
          cartArr.map((prod, index) => (
            <CartItem {...prod} key={prod.id} index={index} />
          ))}
      </ul>

      <div className={classes.Footer}>
        <div className={classes.Total}>
          <p className={classes.Sub}>Всього: {totalAmount} шт до замовлення</p>
          <p className={classes["Total-amount"]}>
            Всього до оплати: {totalPrice},00 грн.
          </p>
        </div>
        <div>
          <form
            className="form-submit"
            // action="mailto:pustovit.for@gmail.com"
            method="submit"
            onSubmit={submitTitle}
          >
            <input
              type="email"
              name="email"
              id="mail"
              placeholder="Your Email"
              onChange={inputHandler}
            />
            <input
              type="tel"
              name="tel"
              id="phone"
              onChange={inputHandler}
              placeholder="Your Phone number"
            />
            <input
              // onSubmit={submitTitle}
              type="submit"
              value="Замовити"
              className={classes["Buy-btn"]}
            />
            {/* <div className={classes["Buy-btn"]}>Замовити</div> */}
          </form>
        </div>
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

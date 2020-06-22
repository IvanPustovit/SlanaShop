import React, { useState } from "react";
import classes from "../Cart/Cart.module.css";
import CartItem from "../CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
// import { inCartProduct } from "../../redux/slice";

import "./CartList.css";
import Axios from "axios";
// import client from "../../utils/sendMail";
// import { fib } from "../../utils/axios/firebase";

import emailjs from "emailjs-com";
import { servID, templeteId, userId } from "../../utils/sendMail";
// import { SMTPClient } from "emailjs";

const CartList = (props) => {
  const [form, setForm] = useState([]);
  const cartArr = useSelector((state) => state.inCart);

  const totalAmount = cartArr.reduce(function (sum, el) {
    return sum + el.amountInCart;
  }, 0);

  const totalPrice = cartArr.reduce((sum, el) => {
    return sum + el.amountInCart * el.price;
  }, 0);

  const arr = cartArr.map((el) => el);

  const setting = {
    name: form.nameUser,
    email: form.email,
    phone: form.tel,
    comment: form.comment,
    attachment: arr,
  };
  ////////////////////////////////////////////////

  // const client = new SMTPClient({
  //   user: "slanashop@slana.net.ua",
  //   password: "SlanaAdmin01062020",
  //   host: "mail.adm.tools",
  //   port: 465,
  //   ssl: true,
  // });

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const submitTitle = (e) => {
    e.preventDefault();
    console.log(setting);

    const stringOrder = cartArr.map((el) => {
      return (el.toString = () => {
        return `NAME ${el.name}`;
      });
    });
    console.log(stringOrder);
    const order = JSON.stringify(stringOrder);
    // client.send(setting, (err, setting) => {
    //   console.log(err || setting);
    // });

    // emailjs
    //   .send(servID, templeteId, setting, userId)
    //   .then((res) => console.log(res));
  };

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
            id="formSubmit"
            // action="mailto:pustovit.for@gmail.com"
            method="submit"
            onSubmit={submitTitle}
          >
            <input
              type="text"
              name="nameUser"
              value={form.name}
              id="nameUser"
              placeholder="Як Вас звати?"
              onChange={inputHandler}
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              id="mail"
              placeholder="Ваш Email"
              onChange={inputHandler}
              required
            />
            <input
              type="tel"
              name="tel"
              value={form.tel}
              id="phone"
              onChange={inputHandler}
              placeholder="Ваш номер телефону"
              required
            />
            <textarea
              form="formSubmit"
              // cols="40"
              type="text"
              name="comment"
              value={form.comment}
              id="comment"
              onChange={inputHandler}
              placeholder="Ваш коментарій до замовлення"
            ></textarea>
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

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  plusAmountItem,
  minusAmountItem,
  deleteToCart,
} from "../../module/action";

import "./CartItem.css";

const CartItem = ({
  img,
  name,
  price,
  color,
  size,
  category,

  index,
}) => {
  const stateCart = useSelector((state) => state.inCart);

  const dispatch = useDispatch();

  const up = (e) => {
    const type = e.target.value;
    switch (type) {
      case "plus":
        return dispatch(plusAmountItem(index));
      case "minus":
        if (stateCart[index].amountInCart === 1) {
          dispatch(deleteToCart(index));
        } else {
          dispatch(minusAmountItem(index));
        }
        return;

      default:
        return;
    }
  };
  const amountItem = stateCart[index].amountInCart;

  const deleteItem = () => {
    dispatch(deleteToCart(index));
  };

  return (
    <li className="card">
      <img src={img} alt={name} className="foto-card" />
      <p className="card-info">
        Футболка {category} "{name}"
      </p>
      <p className="card-price">{price * amountItem}.00 грн</p>
      <p className="cart-color">
        Колір: <span>{color}</span>
      </p>
      <p className="cart-color">
        Розмір: <span>{size}</span>
      </p>
      <div>
        {/* <p className={classes.Price}>$ {(price * amount).toFixed(2)}</p> */}
        <button className="{classes.Change}" onClick={up} value="minus">
          -
        </button>
        <p className="amount">{amountItem}</p>
        <button className="{classes.Change} " onClick={up} value="plus">
          +
        </button>
      </div>
      <div>
        <button className="{classes.Change} " onClick={deleteItem}>
          видалити
        </button>
      </div>
    </li>
  );
};

export default CartItem;

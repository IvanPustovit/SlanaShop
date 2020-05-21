import React from "react";
import "./CartItem.css";
import { useSelector, useDispatch } from "react-redux";
import { amount, plus, minus, inCartProduct } from "../../redux/slice";

const CartItem = (props) => {
  const amountValue = useSelector(amount);
  const dispatch = useDispatch();
  const down = () => dispatch(minus());
  const up = () => dispatch(plus());
  const { img, name, price, color, size, category } = props;

  return (
    <li className="card">
      <img src={img} alt={name} className="foto-card" />
      <p className="card-info">
        Футболка {category} "{name}"
      </p>
      <p className="card-price">{price}.00 грн</p>
      <p className="cart-color">
        Колір: <span>{color}</span>
      </p>
      <p className="cart-color">
        Розмір: <span>{size}</span>
      </p>
      <div>
        {/* <p className={classes.Price}>$ {(price * amount).toFixed(2)}</p> */}
        <button className="{classes.Change}" onClick={down}>
          -
        </button>
        <p className="amount">{amountValue}</p>
        <button className="{classes.Change} " onClick={up}>
          +
        </button>
      </div>
      <div>
        <button className="{classes.Change} ">видалити</button>
      </div>
    </li>
  );
};

export default CartItem;

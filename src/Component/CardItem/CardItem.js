import React, { useState } from "react";
import "./CardItem.css";
import { NavLink } from "react-router-dom";
import CardItemModal from "../CardIteamModal/CardItemModal";

const CardItem = (prod) => {
  const [modal, setModal] = useState(false);

  // console.log(prod);

  const toggleModal = (e) => {
    setModal(!modal);
    // console.log(e.target);
  };
  const closeModal = (e) => {
    // if (e.target.nodeName === "DIV") {
    //   return;
    // }
    setModal(!modal);
  };

  const closeModalKey = () => {
    setModal(!modal);
  };
  const { img, alt, name, price, category } = prod;

  return (
    <li className="card">
      {modal && (
        <CardItemModal
          product={prod}
          closeModal={closeModal}
          closeModalKey={closeModalKey}
        />
      )}
      {/* <NavLink to="" > */}
      <img src={img} alt={alt} className="foto-card" onClick={toggleModal} />
      <p className="card-info">
        Футболка {category} "{name}"
      </p>
      <p className="card-price">{price}.00 грн</p>
      {/* </NavLink> */}
    </li>
  );
};

export default CardItem;

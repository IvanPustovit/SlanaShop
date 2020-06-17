import React, { useState } from "react";
import "./CardItem.css";

import CardItemModal from "../CardIteamModal/CardItemModal";

const CardItem = (prod) => {
  const [modal, setModal] = useState(false);

  const toggleModal = (e) => {
    setModal(!modal);
  };

  const closeModal = (e) => {
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
      <p className="card-info">Футболка {category.toLowerCase()}</p>
      <p className="card-info_name">"{name.toUpperCase()}"</p>
      <p className="card-price">{+price}.00 грн</p>
      {/* </NavLink> */}
    </li>
  );
};

export default CardItem;

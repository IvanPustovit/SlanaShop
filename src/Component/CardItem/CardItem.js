import React, { useState } from "react";
import "./CardItem.css";

const CardItem = ({ key, img, alt, size }) => {
  return (
    <li className="card">
      <a href={img}>
        <img src={img} alt={alt} className="foto-card" />
        <p className="card-info">Футболка для хлопчика "Козак"</p>
        <p className="card-price">200.00 грн</p>
      </a>
    </li>
  );
};

export default CardItem;

import React from "react";
import "./CardList.css";
import CardItem from "../CardItem/CardItem";

import { useSelector } from "react-redux";
import AsideShop from "../Aside/AsideShop";

const CardList = () => {
  const listShop = useSelector((state) => state.listShop);

  return (
    <section className="card-list" id="Shop">
      <AsideShop />
      <main className="container">
        <ul className="card-list_item">
          {listShop.map((prod) => (
            <CardItem {...prod} key={prod.id} />
          ))}
        </ul>
        <button className="button-next">Показати ще товари</button>
      </main>
    </section>
  );
};

export default CardList;

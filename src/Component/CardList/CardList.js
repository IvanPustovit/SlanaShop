import React, { useState } from "react";
import "./CardList.css";
import CardItem from "../CardItem/CardItem";

import { useSelector } from "react-redux";
import AsideShop from "../Aside/AsideShop";
import { listShopSelector, filterSelector } from "../../module/Selectors";

const CardList = () => {
  const listShop = useSelector((state) => listShopSelector(state));
  const filter = useSelector((state) => filterSelector(state));

  return (
    <section className="card-list" id="Shop">
      <AsideShop />
      <main className="container">
        <ul className="card-list_item">
          {filter && filter.map((prod) => <CardItem {...prod} key={prod.id} />)}
          {!filter &&
            listShop.map((prod) => <CardItem {...prod} key={prod.id} />)}
        </ul>
        <button className="button-next">Показати ще товари</button>
      </main>
    </section>
  );
};

export default CardList;

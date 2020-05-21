import React, { useState } from "react";
import "./CardList.css";
import CardItem from "../CardItem/CardItem";
import product from "../../db/item.json";

const CardList = () => {
  // const [modalActive, setModalActive] = useState(true);
  const [cardsArr, setCardsArr] = useState(product);

  return (
    <section className="card-list" id="Shop">
      <main className="container">
        <ul className="card-list_item">
          {cardsArr.map((prod) => (
            <CardItem
              {...prod}
              key={prod.id}
              // key={el.id} img={el.img} alt={el.alt} size={el.size}
            />
          ))}
        </ul>
        <button className="button-next">Показати ще товари</button>
      </main>
    </section>
  );
};

export default CardList;

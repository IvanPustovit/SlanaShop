import React, { useState } from "react";
import "./CardList.css";
import CardItem from "../CardItem/CardItem";

const CardList = () => {
  const [cardsArr, setCardsArr] = useState([
    {
      img: "https://i.ibb.co/3dcVPmH/1.jpg",
      alt: "1",
      size: "",
    },

    {
      img: "https://i.ibb.co/KqTTr1J/3.jpg",
      alt: "3",
      size: "",
    },
    {
      img: "https://i.ibb.co/kgRjjx5/4.jpg",
      alt: "4",
      size: "",
    },
    {
      img: "https://i.ibb.co/kgRjjx5/4.jpg",
      alt: "4",
      size: "",
    },
    {
      img: "https://i.ibb.co/kgRjjx5/4.jpg",
      alt: "4",
      size: "",
    },
    {
      img: "https://i.ibb.co/kgRjjx5/4.jpg",
      alt: "4",
      size: "",
    },
    {
      img: "https://i.ibb.co/kgRjjx5/4.jpg",
      alt: "4",
      size: "",
    },
  ]);

  return (
    <section class="card-list">
      <main class="container">
        <ul class="card-list_item">
          {cardsArr.map((el) => (
            <CardItem key={el.alt} img={el.img} alt={el.alt} size={el.size} />
          ))}
        </ul>
        <button className="button-next">Показати ще товари</button>
      </main>
    </section>
  );
};

export default CardList;

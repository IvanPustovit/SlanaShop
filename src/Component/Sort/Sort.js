import React from "react";
import "./Sort.css";

const Sort = () => {
  return (
    <section className="sort">
      <select name="Sort" id="" className="for">
        <option value="">Для сім'ї</option>
        <option value="">Для дівчаток</option>
        <option value="">Для хлопчиків</option>
        <option value="">Для жінок</option>
        <option value="">Для чоловіків</option>
      </select>
      <select name="" id="">
        <option value="">по порядку</option>
        <option value="">за збільшенням ціни</option>
        <option value="">за зменшенням ціни</option>
      </select>
    </section>
  );
};

export default Sort;

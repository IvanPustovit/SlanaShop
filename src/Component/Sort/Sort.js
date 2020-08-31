import React from "react";
import "./Sort.css";
import { useSelector, useDispatch } from "react-redux";
import { sortItem } from "../../module/action";

const Sort = () => {
  const product = useSelector((state) => state.listShop);
  const dispatch = useDispatch();

  const sort = (e) => {
    const value = e.target.value;
    dispatch(sortItem(value));
  };
  return (
    <section className="sort" id="sort">
      {/* <select name="Sort" id="" className="for">
        <option value="">Для сім'ї</option>
        <option value="">Для дівчаток</option>
        <option value="">Для хлопчиків</option>
        <option value="">Для жінок</option>
        <option value="">Для чоловіків</option>
      </select> */}
      <select name="" id="" onClick={sort}>
        <option value="по порядку">по порядку</option>
        <option value="за збільшенням ціни">за збільшенням ціни</option>
        <option value="за зменшенням ціни">за зменшенням ціни</option>
      </select>
    </section>
  );
};

export default Sort;

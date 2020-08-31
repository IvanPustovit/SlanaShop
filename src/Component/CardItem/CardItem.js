import React, { useState, Suspense, lazy } from "react";
import "./CardItem.css";

// import CardItemModal from "../CardIteamModal/CardItemModal";
import { Link, Route, NavLink } from "react-router-dom";

const CardItemModal = lazy(() => import("./Item"));

const CardItem = (prod) => {
  const [modal, setModal] = useState(false);

  const { img, alt, name, price, category, species, id } = prod;

  return (
    <>
      <li className="card">
        {/* <div> */}
        <Link
          to={{
            pathname: `/${id}`,
          }}
          exact
        >
          <img
            src={img}
            alt={name}
            className="foto-card"
            // onClick={toggleModal}
          />
        </Link>
        {/* </div> */}
        <p className="card-info">
          {species} {category.toLowerCase()}
        </p>
        <p className="card-info_name">"{name.toUpperCase()}"</p>
        <p className="card-price">{+price}.00 грн</p>
      </li>
      <Suspense fallback="....Load">
        <Route path="/ss" render={() => <CardItemModal product={prod} />} />
      </Suspense>
    </>
  );
};

export default CardItem;

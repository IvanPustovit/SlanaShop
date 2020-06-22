import React, { useState, Suspense, lazy } from "react";
import "./CardItem.css";

// import CardItemModal from "../CardIteamModal/CardItemModal";
import { Link, Route, NavLink } from "react-router-dom";

const CardItemModal = lazy(() => import("./Item"));

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
  const { img, alt, name, price, category, species, id } = prod;

  return (
    <>
      <li className="card">
        {/* {modal && (
        <CardItemModal
          product={prod}
          closeModal={closeModal}
          closeModalKey={closeModalKey}
        />
      )} */}
        {/* <NavLink to="" > */}
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
        {/* </NavLink> */}
      </li>
      <Suspense fallback="....Load">
        <Route path="/ss" render={() => <CardItemModal product={prod} />} />
      </Suspense>
    </>
  );
};

export default CardItem;

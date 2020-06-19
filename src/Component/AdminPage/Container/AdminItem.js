import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFromFirebase } from "../../../utils/axios/firebase";

// import "./CardItem.css";

// import CardItemModal from "../CardIteamModal/CardItemModal";

const AdminItem = ({ img, name, price, category, id, getItemFrom }) => {
  const dispatch = useDispatch();

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

  const deleteItem = (dbName, id) => {
    dispatch(deleteFromFirebase(dbName, id));
  };

  const updateItem = () => {
    getItemFrom("shop", id);
  };

  return (
    <li className="card">
      {/* {modal && (
        <CardItemModal
          product={prod}
          closeModal={closeModal}
          closeModalKey={closeModalKey}
        />
      )} */}
      {/* <NavLink to="" > */}
      <img src={img} alt={name} className="foto-card" onClick={toggleModal} />
      <p className="card-info">Футболка {category.toLowerCase()}</p>
      <p className="card-info_name">"{name.toUpperCase()}"</p>
      <p className="card-price">{+price}.00 грн</p>
      <button onClick={() => deleteItem("shop", id)}>Видалити</button>
      <button onClick={updateItem}>Редагувати</button>

      {/* </NavLink> */}
    </li>
  );
};

export default AdminItem;

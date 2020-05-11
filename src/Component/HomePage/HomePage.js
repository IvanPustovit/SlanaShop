import React from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Sort from "../Sort/Sort";
import CardList from "../CardList/CardList";
import Viewer from "../Viewer/Viewer";
import Sale from "../Sale/Sale";
import Delivery from "../Delivery/Delivery";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Sort />
      <CardList />
      <Viewer />
      <Sale />
      <Delivery />
      <Footer />
    </div>
  );
};

export default HomePage;

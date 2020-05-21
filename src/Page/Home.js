import React from "react";
import Slider from "../Component/Slider/Slider";
import Sort from "../Component/Sort/Sort";
import CardList from "../Component/CardList/CardList";
import Viewer from "../Component/Viewer/Viewer";
import Sale from "../Component/Sale/Sale";
import Delivery from "../Component/Delivery/Delivery";
import Footer from "../Component/Footer/Footer";

const Home = () => {
  return (
    <div>
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

export default Home;

import React from "react";
import "./Viewer.css";
import Slider from "react-slick";

const Viewer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    //   adaptiveHeight: true,
  };
  return (
    <section class="viewed">
      <div class="container">
        <p className="view-item">Ви дивились:</p>
        <ul class="card-list_item card-list-slid">
          <Slider {...settings}>
            <li className="card">
              <a href="https://i.ibb.co/kgRjjx5/4.jpg">
                <img
                  src="https://i.ibb.co/kgRjjx5/4.jpg"
                  alt=""
                  class="foto-card"
                />
                <p className="card-price">200 грн</p>
              </a>
            </li>
            <li className="card">
              <a href="https://i.ibb.co/kgRjjx5/4.jpg">
                <img
                  src="https://i.ibb.co/kgRjjx5/4.jpg"
                  alt=""
                  class="foto-card"
                />
                <p className="card-price">200 грн</p>
              </a>
            </li>
            <li className="card">
              <a href="https://i.ibb.co/kgRjjx5/4.jpg">
                <img
                  src="https://i.ibb.co/kgRjjx5/4.jpg"
                  alt=""
                  class="foto-card"
                />
                <p className="card-price">200 грн</p>
              </a>
            </li>
            <li className="card">
              <a href="https://i.ibb.co/kgRjjx5/4.jpg">
                <img
                  src="https://i.ibb.co/kgRjjx5/4.jpg"
                  alt=""
                  class="foto-card"
                />
                <p className="card-price">200 грн</p>
              </a>
            </li>
            <li className="card">
              <a href="https://i.ibb.co/kgRjjx5/4.jpg">
                <img
                  src="https://i.ibb.co/kgRjjx5/4.jpg"
                  alt=""
                  class="foto-card"
                />
                <p className="card-price">200 грн</p>
              </a>
            </li>
          </Slider>
        </ul>
      </div>
    </section>
  );
};

export default Viewer;

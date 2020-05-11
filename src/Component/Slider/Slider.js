import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      //   adaptiveHeight: true,
    };

    return (
      <Slider {...settings}>
        {/* <section class=""> */}
        {/* <div class=""> */}
        <div>
          <h3 className="container">
            <img
              src="https://i.ibb.co/6D66vLR/sl1.png"
              alt="screen"
              className="img-slide"
            />
          </h3>
        </div>
        <div>
          <h3 className="container">
            <img
              src="https://i.ibb.co/80z4d3h/sl2.png"
              alt="1"
              className="img-slide"
            />
          </h3>
        </div>
        <div>
          <h3 className="container">
            <img
              src="https://i.ibb.co/CVS3sWX/sl3.png"
              alt="2"
              className="img-slide"
            />
          </h3>
        </div>
        <div>
          <h3 className="container">
            <img
              src="https://i.ibb.co/6gd9Ff1/sl4.png"
              alt="N"
              className="img-slide"
            />
          </h3>
        </div>
        <div>
          <h3 className="container">
            <img
              src="https://i.ibb.co/r6FQxrh/sl5.png"
              alt="N"
              className="img-slide"
            />
          </h3>
        </div>

        {/* </div> */}
        {/* </section> */}
      </Slider>
    );
  }
}

export default SimpleSlider;

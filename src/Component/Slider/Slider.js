import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const Sliders = () => {
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
            src="https://i.ibb.co/N1dfL2H/sl2.png"
            alt="1"
            className="img-slide"
          />
        </h3>
      </div>
      <div>
        <h3 className="container">
          <img
            src="https://i.ibb.co/nf9jcbb/sl3.png"
            alt="2"
            className="img-slide"
          />
        </h3>
      </div>
      <div>
        <h3 className="container">
          <img
            src="https://i.ibb.co/XCm9d4Z/sl4.png"
            alt="N"
            className="img-slide"
          />
        </h3>
      </div>
      <div>
        <h3 className="container">
          <img
            src="https://i.ibb.co/kVZRdn1/sl5.png"
            alt="N"
            className="img-slide"
          />
        </h3>
      </div>

      {/* </div> */}
      {/* </section> */}
    </Slider>
  );
};

export default Sliders;
// class SimpleSlider extends React.Component {
//   render() {
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 1000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   //   adaptiveHeight: true,
// };

//     const getImage = async (step) => {
//       // setLoader(true);
//       // const ursSearch = `${api.url}?q=${name}&page=${step}&key=${api.key}&image_type=photo&orientation=horizontal&per_page=12`;
//       try {
//         // const res = await getUser();
//         // console.log(res);
//         // setImages((prev) => [...prev, ...res.data.hits]);
//       } catch (error) {
//         // setError("UPS error server");
//       } finally {
//         // setLoader(false);
//       }
//     };

//     // console.log(getUser());

//     return (
//       <Slider {...settings}>
//         {/* <section class=""> */}
//         {/* <div class=""> */}
//         <div>
//           <h3 className="container">
//             <img
//               src="https://i.ibb.co/6D66vLR/sl1.png"
//               alt="screen"
//               className="img-slide"
//             />
//           </h3>
//         </div>
//         <div>
//           <h3 className="container">
//             <img
//               src="https://i.ibb.co/N1dfL2H/sl2.png"
//               alt="1"
//               className="img-slide"
//             />
//           </h3>
//         </div>
//         <div>
//           <h3 className="container">
//             <img
//               src="https://i.ibb.co/nf9jcbb/sl3.png"
//               alt="2"
//               className="img-slide"
//             />
//           </h3>
//         </div>
//         <div>
//           <h3 className="container">
//             <img
//               src="https://i.ibb.co/XCm9d4Z/sl4.png"
//               alt="N"
//               className="img-slide"
//             />
//           </h3>
//         </div>
//         <div>
//           <h3 className="container">
//             <img
//               src="https://i.ibb.co/kVZRdn1/sl5.png"
//               alt="N"
//               className="img-slide"
//             />
//           </h3>
//         </div>

//         {/* </div> */}
//         {/* </section> */}
//       </Slider>
//     );
//   }
// }

// export default SimpleSlider;

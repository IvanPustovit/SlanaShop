import React, { useState } from "react";
import "./CardItemModal.css";
import { useSelector, useDispatch } from "react-redux";
import { inCartProduct, setColor } from "../../redux/slice";

const CardItemModal = ({ product, closeModal }) => {
  // const [amount, setAmount] = useState(0);
  // const [disabled, setDisabled] = useState(false);
  const [colorProducts, setColorProducts] = useState("");
  // const [sizeProduct, setSizeProduct] = useState("");
  const [inCartValue, setCartValue] = useState({});

  const { img, alt, name, article, info, price, size, category } = product;

  const colorValue = useSelector(inCartProduct);
  // console.log(colorValue);
  const dispatch = useDispatch();
  const setColorValue = () => dispatch(setColor(inCartValue));
  // const close = closeModal();

  // const increment = () => {
  //   setAmount(amount + 1);
  // };
  // const decrement = () => {
  //   if (amount === 0) {
  //     setDisabled(false);
  //     return;
  //   }
  //   setAmount(amount - 1);
  // };

  const setColors = (e) => {
    const colors = e.target.value;
    setColorProducts(colors);
    // setCartValue({
    //   color: colors,
    // });
    console.dir(e.target.value);
  };

  const setSize = (e) => {
    // const size = e.target.value;
    setCartValue({
      color: colorProducts,
      size: e.target.value,
      // amount: amount,
      name: name,
      article: article,
      img: img,
      price: price,
      category,
    });
    // setSizeProduct(size);
  };

  const inCart = () => {
    // setCartValue({
    //   // color: colorProduct,
    //   size: sizeProduct,
    //   amount: amount,
    //   name: name,
    //   article: article,
    //   img: img,
    //   price: price,
    // });
    setColorValue();

    // closeModal();
    // console.log(inCartValue);
  };

  // console.log(inCartValue);
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-item container">
          <button className="close-btn" onClick={closeModal}>
            Закрити
          </button>

          <div className="">
            <img src={img} alt={alt} className="img-modal" />
          </div>
          <div className="info-item">
            <h2 className="name-item">{name}</h2>
            <p className="info-item_article">{article}</p>
            <p className="info-item_info">{info}</p>
            <div className="color-item">
              <div className="color-spam">
                <span className="color-item_span">
                  Колір футболки (виробництво Україна)
                </span>
                <select
                  name="color-made-ua"
                  id=""
                  className="color-made_select"
                  onClick={setColors}
                >
                  <option value="білий-україна">Білий</option>
                </select>
                <span value="Турція">Колір футболки (виробництво Турція) </span>

                <select
                  name="color-made-vengria"
                  id=""
                  className="color-made_select"
                  onClick={setColors}
                >
                  <option className="bgr-white" value="білий-турція">
                    Білий
                  </option>
                  <option className="bgr-black" value="чорний-турція">
                    Чорний
                  </option>
                  <option className="bgr-grey" value="сірий-турція">
                    Сірий
                  </option>
                </select>
                <span>Колір футболки (виробництво Венгрія)</span>
                <select
                  name="color-made-turkish"
                  id=""
                  className="color-made_select"
                  onClick={setColors}
                >
                  <option value="білий-венгрія">Білий</option>
                  <option value="чорний-венгрія">Чорний</option>
                  <option value="жовтий-венгрія">Жовтий</option>
                  <option value="синій-венгрія">Синій</option>
                  <option value="зелений-венгрія">Зелений</option>
                  <option value="сірий-венгрія">Сірий</option>
                  <option value="блакитний-венгрія">Блакитний</option>
                </select>
              </div>
              <div>
                <p>size table</p>
              </div>
            </div>
          </div>
          <div className="modal-price">
            <h2>{price}.00 грн</h2>
            <div>
              <span>Розмір</span>
              <select
                name="color-made-turkish"
                id=""
                className="color-made_select"
                onClick={setSize}
              >
                {size.map((el) => (
                  <option value={el} key={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
            {/* <span>Кількість</span>

            <div className="modal-number">
              <button onClick={decrement} disabled={disabled}>
                -
              </button>
              <span>{amount}</span>
              <button onClick={increment}>+</button>
            </div> */}
            <div>
              <button className="button-cart" onClick={inCart}>
                В КОШИК
              </button>
            </div>
          </div>
        </div>
        <div className="characteristic container">
          <h3 className="characteristic_name">Характеристики</h3>
          <div className="characteristic_info">
            <p>Матеріал футболки</p>
            <div>
              <p>
                виробництво Україна тканина сендвіч, складається з двох шарів:
                зовнішній - 100% поліестер, внутрішній шар двошарової ткани 100%
                бавовни.
              </p>
              <p>виробництво Турція склад - бавовна 100%.</p>
              <p>виробництво Венгрія склад - бавовна 100%.</p>
            </div>
            <p>Тип та техніка виконання:</p>
            <p>машинна, гладь</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemModal;

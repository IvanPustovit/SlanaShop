import React, { useState, useEffect, Suspense } from "react";
import "./CardItemModal.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, plusAmountItem } from "../../module/action";

import { db } from "../../firebaseConfig";
// import { inCartProduct, setInCart } from "../../redux/slice";

const CardItemModal = (props) => {
  const [colorProducts, setColorProducts] = useState("");
  const [sizeProduct, setSizeProduct] = useState("");
  const [inCartValue, setCartValue] = useState({});
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const cartArr = useSelector((state) => state.inCart);
  const prodId = props.match.params.id;

  const setCartItem = () => dispatch(addToCart(inCartValue));

  const setColors = (e) => {
    const colors = e.target.value;
    setColorProducts(colors);
    setCartValue({
      color: colorProducts,
      size: sizeProduct,
      amountInCart: 1,
      name: product.name,
      article: product.article,
      img: product.img,
      price: product.price,
      category: product.category,
      id: product.id,
      amount: product.amount,
    });
  };

  const setSize = (e) => {
    setSizeProduct(e.target.value);
    setCartValue({
      color: colorProducts,
      size: e.target.value,
      amountInCart: 1,
      name: product.name,
      article: product.article,
      img: product.img,
      price: product.price,
      category: product.category,
      id: product.id,
      amount: product.amount,
    });
  };

  const addFind = (color, size) => {
    const item = cartArr.find((el) => el.color === color && el.size === size);

    if (item) {
      const index = cartArr.indexOf(item);
      dispatch(plusAmountItem(index));
    } else {
      setCartItem();
    }
  };

  const st = (e) => {
    e.preventDefault();
    addFind(inCartValue.color, inCartValue.size);
  };

  useEffect(() => {
    db.collection("shop")
      .get()
      .then((res) => {
        const d = res.docs.map((doc) => ({
          ...doc.data(),
        }));
        const resp = d.find((el) => el.id === prodId);
        setProduct(resp);
      });
  }, [prodId]);

  return (
    // <div className="overlay">
    // <Suspense fallback={`${(<div>...Load</div>)}`}>
    <>
      {!product && <div>Load</div>}
      {product && (
        <div className="modal">
          <div className="modal-item container">
            <form className="form-cart" onSubmit={st}>
              <div className="">
                <img
                  src={product.img}
                  alt={product.name}
                  className="img-modal"
                />
              </div>
              <div className="info-item">
                <h2 className="name-item">{product.name.toUpperCase()}</h2>
                <p className="info-item_article">{product.article}</p>
                <p className="info-item_info">{product.info}</p>
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
                      <option value="білий-україна"></option>

                      <option value="білий-україна">Білий</option>
                    </select>
                    <span value="Турція">
                      Колір футболки (виробництво Турція){" "}
                    </span>

                    <select
                      name="color-made-vengria"
                      id=""
                      className="color-made_select"
                      onClick={setColors}
                    >
                      <option
                        className="bgr-white"
                        value="білий-турція"
                      ></option>
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
                      <option value="білий-венгрія"></option>

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
                    <p>
                      Розмірна сітка
                      {/* <a href="#">Розмірна сітка</a> */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-price">
                <h2>{product.price}.00 грн</h2>
                <div>
                  <span>Розмір</span>
                  <select
                    name="color-made-turkish"
                    id=""
                    className="color-made_select"
                    onClick={setSize}
                  >
                    {product.size.split(",").map((el) => (
                      <option value={el} key={el} name={el}>
                        {el}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <button className="button-cart">В КОШИК</button>
                </div>
              </div>
            </form>
          </div>

          <div className="characteristic container">
            <h3 className="characteristic_name">Характеристики</h3>
            <div className="characteristic_info">
              <p className="characteristic_type">Матеріал футболки</p>
              <div>
                <p>
                  виробництво Україна тканина сендвіч, складається з двох шарів:
                  зовнішній - 100% поліестер, внутрішній шар двошарової ткани
                  100% бавовни.
                </p>
                <p>виробництво Турція склад - бавовна 100%.</p>
                <p>виробництво Венгрія склад - бавовна 100%.</p>
              </div>
              <p className="characteristic_type">Тип та техніка виконання:</p>
              <div>
                <p>машинна, гладь</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
    // </Suspense>
    // </div>
  );
};

export default CardItemModal;

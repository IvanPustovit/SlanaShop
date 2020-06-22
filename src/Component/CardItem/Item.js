import React from "react";

const Item = (product) => {
  console.log(product);
  return (
    <div className="modal">
      <div className="modal-item container">
        {/* <button className="close-btn" onClick={closeModal}>
            Закрити
          </button> */}

        <div className="">
          <img src={product.img} alt={product.name} className="img-modal" />
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
                // onClick={setColors}
              >
                <option value="білий-україна"></option>

                <option value="білий-україна">Білий</option>
              </select>
              <span value="Турція">Колір футболки (виробництво Турція) </span>

              <select
                name="color-made-vengria"
                id=""
                className="color-made_select"
                // onClick={setColors}
              >
                <option className="bgr-white" value="білий-турція"></option>
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
                // onClick={setColors}
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
              <p>size table</p>
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
              //   onClick={setSize}
            >
              {product.size.split(",").map((el) => (
                <option value={el} key={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              className="button-cart"
              //   onClick={st}
            >
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
  );
};

export default Item;

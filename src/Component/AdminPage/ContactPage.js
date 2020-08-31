import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFooterContacts } from "../../utils/axios/firebase";

import { footerContactSelector } from "../../module/Selectors";

const initialState = {
  name: "",
  address: "",
  tel: "",
};

const ContactPage = () => {
  const [text, setText] = useState(initialState);
  const dispatch = useDispatch();
  const contact = useSelector((state) => footerContactSelector(state));

  console.log(contact);
  const valueHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setText({ ...text, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addFooterContacts("contactFooter", text));
    setText(initialState);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Контактна особа"
          value={text.name}
          onChange={valueHandler}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Адреса"
          value={text.address}
          onChange={valueHandler}
        />
        <input
          type="tel"
          name="tel"
          placeholder="Номер телефону"
          value={text.tel}
          onChange={valueHandler}
          required
        />
        <button type="submit">Save</button>
      </form>
      <div className="contacts">
        {contact &&
          contact.map((el) => (
            <div key={el.id} className="contact-list">
              <p className="contact-list_item">Ім'я: {el.name}</p>
              <p className="contact-list_item">Адреса: {el.address}</p>
              <p className="contact-list_item">Телефон: {el.tel}</p>
              <button>Видалити</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContactPage;

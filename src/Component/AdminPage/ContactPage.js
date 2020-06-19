import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFooterContacts } from "../../utils/axios/firebase";

const initialState = {};

const ContactPage = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const valueHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setText({
      [name]: value,
    });
  };

  const onSubmit = () => {
    dispatch(addFooterContacts("contactFooter", text));
    setText("");
  };

  return (
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
        value={text.name}
        onChange={valueHandler}
      />
      <input
        type="tel"
        name="tel"
        placeholder="Номер телефону"
        value={text.name}
        onChange={valueHandler}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ContactPage;

import React, { useState } from "react";
import MailIcon from "@material-ui/icons/Mail";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const contact = useSelector((state) => state.footerContact);
  const [operatingMode, setOperatingMode] = useState("");
  return (
    <section className="footer" id="Contact">
      <footer className="container footer-info">
        <div className="">
          <p>Контакти:</p>
          <ul></ul>
          <p>info</p>
        </div>
        <div>
          <p>Графік роботи:</p>
          <p>
            Понеділок 09:30 - 18:00 Вівторок 09:30 - 18:00 Среда 09:30 - 18:00
            Четвер 09:30 - 18:00 П’ятниця 09:30 - 18:00 Субота 09:30 - 16:00
            Неділя вихідний
          </p>
        </div>
      </footer>
      <Link to="/login" className="login-link">
        <MailIcon />
      </Link>
    </section>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer" id="Contact">
      <footer className="container footer-info">
        <div className="">
          <p>Контакти:</p>
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
    </section>
  );
};

export default Footer;

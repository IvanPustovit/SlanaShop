import React, { useState } from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";

const Header = (props) => {
  const [logo, setLogo] = useState({
    src: "https://i.ibb.co/YQNpyLL/logo.png",
    alt: "logo",
  });
  return (
    <section class="navigation">
      <div class="container">
        <header>
          <nav class="navigation-list">
            <ul class="navigation-page">
              <li>
                <a href="#">Магазин</a>
              </li>
              <li>
                <a href="#">Доставка та оплата</a>
              </li>
              <li>
                <a href="https://imgbb.com/">
                  <img src={logo.src} alt="logo" border="0" class="logo-img" />
                </a>
              </li>

              <li>
                <a href="#">Контакти</a>
              </li>
            </ul>
            <ul class="navigation-icon">
              <li>
                <a href="#">
                  <PhoneIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <MailIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <Cart />
            </ul>
          </nav>
        </header>
      </div>
    </section>
  );
};

export default Header;

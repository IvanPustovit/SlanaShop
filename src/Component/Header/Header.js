import React, { useState } from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const [logo, setLogo] = useState({
    src: "https://i.ibb.co/YQNpyLL/logo.png",
    alt: "logo",
  });

  // console.log(window.location.pathname + window.location.hash);
  return (
    <section className="navigation">
      <div className="container">
        <header>
          <nav className="navigation-list">
            <ul className="navigation-page">
              <li>
                <a
                  href="#Shop"
                  // isActive={() =>
                  //   window.location.pathname + window.location.hash === "/Shop"
                  // }
                >
                  Магазин
                </a>
              </li>
              <li>
                <a href="#Deliver">Доставка та оплата</a>
              </li>
              <li>
                <Link to="/">
                  <img
                    src={logo.src}
                    alt="logo"
                    border="0"
                    className="logo-img"
                  />
                </Link>
              </li>

              <li>
                <a href="/#Contact">Контакти</a>
              </li>
            </ul>
            <ul className="navigation-icon">
              <li>
                <a href="tel:">
                  <PhoneIcon />
                </a>
              </li>
              <li>
                <a href="mailto:slanashop@slana.net.ua">
                  <MailIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <Link to="/cart">
                <Cart />
              </Link>
            </ul>
          </nav>
        </header>
      </div>
    </section>
  );
};

export default Header;

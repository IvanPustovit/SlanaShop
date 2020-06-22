import React, { useState } from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation, NavLink } from "react-router-dom";
import CalendarViewDay from "@material-ui/icons/CalendarViewDay";

const Header = () => {
  const [logo, setLogo] = useState({
    src: "https://i.ibb.co/YQNpyLL/logo.png",
    alt: "logo",
  });
  const [burger, setBurger] = useState(false);
  const location = useLocation();

  const onClickBurger = () => {
    setBurger(!burger);

    console.log("False");
  };

  // console.log(window.location.pathname + window.location.hash);
  return (
    // <section className="navigation">
    <div className={`navigation `}>
      <header>
        <nav className="navigation-list">
          <ul className="navigation-page">
            <li className="navigation-burger" onClick={onClickBurger}>
              <CalendarViewDay style={{ fontSize: 80 }} />
              {burger && (
                <ul className="submenu-burger">
                  <li>Головна</li>
                  <li>Каталог товарів</li>
                </ul>
              )}
            </li>
            <li className="navigation-page_link">
              <p className="catalog">
                Каталог товарів{" "}
                <ul className="submenu-catalog">
                  <li>
                    <a href="#" className="">
                      Футболки
                    </a>
                  </li>
                  <li>
                    <a href="#">Рушники</a>
                  </li>
                </ul>
              </p>

              {/* <Link
                to="/#Shop"
                // {{ pathname: "/#Shop", state: { from: location } }}
              >
                Магазин
              </Link> */}

              {/* <Link
                to="/#Shop"
                // {{ pathname: "/#Shop", state: { from: location } }}
              >
                Магазин
              </Link> */}
              {/* <a
                  href="/#Shop"
                  // isActive={() =>
                  //   window.location.pathname + window.location.hash === "/Shop"
                  // }
                >
                  Магазин
                </a> */}
            </li>
            {/* <li className="navigation-page_link">
              <Link to="/#Deliver">Доставка та оплата</Link>
            </li> */}
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

            <li className="navigation-page_link navigation-page_link__contact">
              <Link to="/#Contact">Контакти</Link>
            </li>
          </ul>
          <ul className="navigation-icon">
            <li>
              <a className="phone" href="tel:">
                slanashop@slana.net.ua
              </a>
              <a className="icon-telephone" href="tel:">
                <PhoneIcon />
              </a>
            </li>
            <li>
              <a className="email" href="mailto:slanashop@slana.net.ua">
                slanashop@slana.net.ua
              </a>
              <a className="icon-email" href="mailto:slanashop@slana.net.ua">
                <MailIcon />
              </a>
            </li>
            <li>
              <a className="facebook" href="mailto:slanashop@slana.net.ua">
                slanashop@slana.net.ua
              </a>
              <a className="icon-facebook" href="#">
                <FacebookIcon />
              </a>
            </li>
            <Link
              to={{ pathname: "/cart", state: { from: location } }}
              // "/cart"
            >
              <Cart />
            </Link>
          </ul>
        </nav>
      </header>
    </div>
    // </section>
  );
};

export default Header;

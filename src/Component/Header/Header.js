import React, { useState } from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation, NavLink } from "react-router-dom";
import CalendarViewDay from "@material-ui/icons/CalendarViewDay";
import { useSelector, useDispatch } from "react-redux";
import { addToShop, addFilter, resetFilter } from "../../module/action";

const Header = () => {
  const product = useSelector((state) => state.listShop);
  const dispatch = useDispatch();
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

  const filterShop = (e) => {
    const value = e.target.name;
    const filteredProduct = product.filter((el) => {
      switch (value) {
        case "Футболка":
          return el.species === value;

        case "Рушник":
          return el.species === value;

        default:
          return el;
      }
    });
    console.log(filteredProduct);
    dispatch(addFilter(filteredProduct));
  };

  const resetFiltered = () => dispatch(resetFilter());

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
                    <a
                      href="/#sort"
                      className=""
                      name="Футболка"
                      onClick={filterShop}
                    >
                      Футболки
                    </a>
                  </li>
                  <li>
                    <a href="/#sort" name="Рушник" onClick={filterShop}>
                      Рушники
                    </a>
                  </li>
                </ul>
              </p>
            </li>

            <li>
              <Link to="/">
                <img
                  src={logo.src}
                  alt="logo"
                  border="0"
                  className="logo-img"
                  onClick={resetFiltered}
                />
              </Link>
            </li>
          </ul>
          <ul className="navigation-icon">
            <li>
              <a className="phone phone-position" href="tel:">
                +38 097 218 71 40
              </a>

              <a className="icon-telephone" href="tel:">
                <PhoneIcon />
              </a>
            </li>
            <li>
              <a
                className="email email-position"
                href="mailto:slanashop@slana.net.ua"
              >
                slanashop@slana.net.ua
              </a>
              <a className="icon-email" href="mailto:slanashop@slana.net.ua">
                <MailIcon />
              </a>
            </li>
            <li>
              <a
                className="facebook facebook-position"
                href="mailto:slanashop@slana.net.ua"
              >
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

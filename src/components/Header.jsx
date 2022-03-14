import React from "react";
import { Link } from "react-router-dom";
import "@styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/" className="header__title">
          Platzi conf merch
        </Link>
      </h1>
      <div className="header__checkout">
        <Link to="/checkout">
          <i title="checkout" className="fas fa-shopping-basket" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "@styles/Header.scss";
import AppContext from "@context/AppContext";

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

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
        {cart.length > 0 && <div className="header__alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "@styles/Checkout.scss";
import CheckoutItem from "@components/CheckoutItem";

const Checkout = () => {
  return (
    <div className="checkout">
      <section className="checkout-content">
        <h3>Lista de pedidos:</h3>
        <CheckoutItem />
      </section>

      <section className="checkout-sidebar">
        <h3>Precio total:</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </section>
    </div>
  );
};

export default Checkout;

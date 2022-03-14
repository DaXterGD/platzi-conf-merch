import React from "react";
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
        <button type="button">Continuar pedido</button>
      </section>
    </div>
  );
};

export default Checkout;

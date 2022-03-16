import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "@styles/Checkout.scss";
import CheckoutItem from "@components/CheckoutItem";
import AppContext from "@context/AppContext";
import handleSumTotal from "@utils/handleSumTotal";

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  return (
    <div className="checkout">
      <section className="checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item) => (
          <CheckoutItem item={item} handleRemove={handleRemove} />
        ))}
      </section>

      {cart.length > 0 && (
        <section className="checkout-sidebar">
          <h3>{`Precio total: $ ${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </section>
      )}
    </div>
  );
};

export default Checkout;

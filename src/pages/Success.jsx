import React from "react";
import { Link } from "react-router-dom";
import "@styles/Success.scss";

const Success = () => {
  return (
    <div className="success">
      <h2>..., Gracias por tu compra.</h2>
      <span>Tu pedido llegará en ... días a tu casa.</span>
      <div className="success-map">Google Maps</div>
      <Link to="/" className="link">
        Volver a comprar
      </Link>
    </div>
  );
};

export default Success;

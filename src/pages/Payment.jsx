import React from "react";
import "@styles/Payment.scss";

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        <button className="payment-button">Pagar con PayPal</button>
      </div>
    </div>
  );
};

export default Payment;

import React from "react";

const CheckoutItem = () => {
  return (
    <div className="checkout-item">
      <div className="checkout-element">
        <h4>Item name:</h4>
        <span>$10</span>
      </div>
      <button type="button">
        <i title="eliminar" className="fas fa-trash-alt" />
      </button>
    </div>
  );
};

export default CheckoutItem;

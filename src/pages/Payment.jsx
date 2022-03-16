import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button";
import { useNavigate } from "react-router-dom";
import AppContext from "@context/AppContext";
import handleSumTotal from "@utils/handleSumTotal";
import "@styles/Payment.scss";

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  const paypalOptions = {
    clientId:
      "AZk0dNXmfPqdeShuvoAWq8NfgeX30SUE7PN1_YAPvQnJiICq838u1qjhVoGjfrXJNlKBcGTbI-Lmok45",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate("/checkout/success");
    }
  };

  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="payment-item" key={item.title}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        {cart.length > 0 ? (
          <div className="payment-button">
            <PayPalButton
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal(cart)}
              onPaymentStart={() => console.log("Start payment")}
              onPaymentSuccess={(data) => handlePaymentSuccess(data)}
              onPaymentError={(error) => console.log(error)}
              onPaymentCancel={(data) => console.log(data)}
            />
          </div>
        ) : (
          <h3>Sin items...</h3>
        )}
      </div>
    </div>
  );
};

export default Payment;

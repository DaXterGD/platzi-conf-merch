import React from "react";
import { Link } from "react-router-dom";
import "@styles/Information.scss";
import InformationForm from "@components/InformationForm";

const Information = () => {
  return (
    <div className="info">
      <div className="info-content">
        <section className="info-title">
          <h2>Información de contacto</h2>
        </section>

        <InformationForm />

        <section className="info-buttons">
          <Link to="/checkout">
            <button className="info-back">Regresar</button>
          </Link>
          <Link to="/checkout/payment">
            <button className="info-next">Pagar</button>
          </Link>
        </section>
      </div>

      <aside className="info-sidebar">
        <h3>Pedido</h3>
        <div className="info-item">
          <div className="info-element">
            <h4>Item Name</h4>
            <span>
              <strong>$1000</strong>{" "}
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Information;

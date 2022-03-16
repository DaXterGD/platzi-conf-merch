import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "@styles/Information.scss";
import AppContext from "@context/AppContext";

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      apto: formData.get("apto"),
      city: formData.get("city"),
      country: formData.get("country"),
      state: formData.get("state"),
      cp: formData.get("cp"),
      phone: formData.get("phone"),
    };
    addToBuyer(buyer);
    navigate("/checkout/payment");
  };

  return (
    <div className="info">
      <div className="info-content">
        <section className="info-title">
          <h2>Información de contacto</h2>
        </section>

        <section className="info-form">
          <form ref={form}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              id="name"
            />

            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              id="email"
            />

            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              name="address"
              placeholder="Dirección"
              id="address"
            />

            <label htmlFor="apto">Apartamento</label>
            <input type="text" name="apto" placeholder="Apto" id="apto" />

            <label htmlFor="city">Ciudad</label>
            <input type="text" name="city" placeholder="Ciudad" id="city" />

            <label htmlFor="country">País</label>
            <input type="text" name="country" placeholder="País" id="country" />

            <label htmlFor="state">Estado o província</label>
            <input
              type="text"
              name="state"
              placeholder="Estado o província"
              id="state"
            />

            <label htmlFor="cp">Código postal</label>
            <input type="text" name="cp" placeholder="Código postal" id="cp" />

            <label htmlFor="phone">Teléfono</label>
            <input type="text" name="phone" placeholder="Teléfono" id="phone" />
          </form>
        </section>

        <section className="info-buttons">
          <Link to="/checkout">
            <button className="info-back">Regresar</button>
          </Link>
          <button type="button" className="info-next" onClick={handleSubmit}>
            Pagar
          </button>
        </section>
      </div>

      <aside className="info-sidebar">
        <h3>Pedido</h3>
        {cart.map((item) => (
          <div className="info-item" key={item.title}>
            <div className="info-element">
              <h4>{item.title}</h4>
              <span>
                <strong>${item.price}</strong>{" "}
              </span>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Information;

import React from "react";
import '@styles/Information.scss'

const Information = () => {
  return (
    <div className="info">
      <div className="info-content">
        
        <section className="info-title">
          <h2>Información de contacto</h2>
        </section>

        <section className="info-form">
          <form action="">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" placeholder="Nombre completo" id="name" />

            <label htmlFor="email">Correo electrónico</label>
            <input type="email" name="email" placeholder="Correo electrónico" id="email" />

            <label htmlFor="address">Dirección</label>
            <input type="text" name="address" placeholder="Dirección" id="address" />

            <label htmlFor="apto">Apartamento</label>
            <input type="text" name="apto" placeholder="Apto" id="apto" />

            <label htmlFor="city">Ciudad</label>
            <input type="text" name="city" placeholder="Ciudad" id="city" />

            <label htmlFor="country">País</label>
            <input type="text" name="country" placeholder="País" id="country" />

            <label htmlFor="state">Estado o província</label>
            <input type="text" name="state" placeholder="Estado o província" id="state" />

            <label htmlFor="cp">Código postal</label>
            <input type="text" name="cp" placeholder="Código postal" id="cp" />
            
            <label htmlFor="phone">Teléfono</label>
            <input type="text" name="phone" placeholder="Teléfono" id="phone" />
          </form>
        </section>

        <section className="info-buttons">
          <button className="info-back">Regresar</button>
          <button className="info-next">Pagar</button>
        </section>
      </div>

        <aside className="info-sidebar">
          <h3>Pedido</h3>
          <div className="info-item">
            <div className="info-element">
              <h4>Item Name</h4>
              <span><strong>$1000</strong> </span>
            </div>
          </div>
        </aside>
    </div>
  );
};

export default Information;

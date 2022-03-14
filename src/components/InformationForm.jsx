import React from "react";

const InformationForm = () => {
  return (
    <section className="info-form">
      <form action="">
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
  );
};

export default InformationForm;

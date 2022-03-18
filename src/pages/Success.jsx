import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AppContext from "@context/AppContext";
import useGoogleAddress from "@hooks/useGoogleAddress";
import Map from "@components/Map";
import "@styles/Success.scss";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);

  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Success</title>
      </Helmet>

      <div className="success">
        <h2>{`${buyer.name}, gracias por tu compra`}</h2>
        <span>Tu pedido llegará en ... días a tu casa.</span>
        <div className="success-map">
          <Map data={location} />
        </div>
        <Link to="/" className="link">
          Volver a comprar
        </Link>
      </div>
    </>
  );
};

export default Success;

import React from "react";
import "@styles/Layout.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

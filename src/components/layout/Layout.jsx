import Header from "./header/Header";
import React from "react";
import scss from "./layout.module.scss";
import Footer from "./footer/Footer";
import Catalog from "./catalog/Catalog";
import Products from "../../pages/products/Products";

const Layout = ({ children }) => {
  return (
    <div className={scss.container}>
      <Header />
      <div className={scss.hero}>
        <Catalog />
        <main className={scss.mainContainer}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

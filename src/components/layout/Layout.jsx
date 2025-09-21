import Header from "./header/Header";
import React from "react";
import scss from "./layout.module.scss";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className={scss.container}>
      <Header />
      <main className={scss.mainContainer}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

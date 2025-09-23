import React from "react";
import Banner from "../banner/Banner";
import scss from "./home.module.scss";
import Products from "../products/Products";
import { useProductContext } from "../../context/ProductContext";

const Home = () => {
  const { category } = useProductContext();
  return (
    <div className={scss.home}>
      <Banner />
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import scss from "./products.module.scss";
import { useProductContext } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const { products, getProducts, category,deleteProduct } = useProductContext();
  const navigate = useNavigate()
  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts =
    category === "ALL"
      ? products
      : products.filter((item) => item.producer === category);
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.products}>
            {filteredProducts.map((item) => (
              <div key={item._id} className={scss.card}>
                <img onClick={() => navigate(`/details/${item._id}`)} src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price} сом</p>
               <div className={scss.btns}>
                 <button onClick={() => navigate(`/update/${item._id}`)}>update</button>
                <button style={{background:'red'}} onClick={() => deleteProduct(item._id)}>delete</button>
               </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

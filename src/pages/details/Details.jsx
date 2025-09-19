import React, { useEffect } from "react";
import scss from "./details.module.scss";
import { useProductContext } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
const Details = () => {
  const navigate = useNavigate();
  const { getOneProduct, oneProduct } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, [id]);

  return (
    <section className={scss.container}>
      <button onClick={() => navigate('/')} style={{ background: "blue", color: "white" }}>Назад</button>
      <div className="container">
        <div className={scss.mainContainer}>
          <h3>{oneProduct.name}</h3>
          <div className={scss.mainBlock}>
            <img src={oneProduct.image} alt="" />
            <div className={scss.title}>
              <p>
                Цвет: <span>{oneProduct.color}</span>
              </p>
              <p>
                Память: <span>{oneProduct.ram} гб</span>
              </p>
              <p>
                Производитель: <span>{oneProduct.producer} company</span>
              </p>
              <p>
                Дата выпуска: <span>{oneProduct.date} г</span>
              </p>
              <p>
                Процессор: <span>{oneProduct.cpu}</span>
              </p>
              <p>
                Операционная система: <span>{oneProduct.system}</span>
              </p>
              <div className={scss.btns}>
                <button>Заказать</button>
                <button style={{ background: "red" }}>В избранное</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

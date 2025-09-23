import React from "react";
import scss from "./basket.module.scss";
import { useProductContext } from "../../context/ProductContext";

const Basket = () => {
  const { basket, removeFromBasket } = useProductContext();

  const totalPrice = basket?.reduce(
    (acc, item) => acc + Number(item.price || 0),
    0
  );

  return (
    <section className={scss.basket}>
      <h2 className={scss.title}>Мой заказ</h2>

      {basket?.length === 0 ? (
        <p className={scss.header}>Заказ жок</p>
      ) : (
        <>
          <div className={scss.items}>
            {basket?.map((item) => (
              <div key={item.id} className={scss.item}>
                <img src={item.image} alt={item.name} />
                <div className={scss.info}>
                  <h3>{item.name}</h3>
                  <p>Цвет: {item.color}</p>
                  <p>Память: {item.ram} гб</p>
                  <p>
                    Цена: <b>{item.price} сом</b>
                  </p>
                  <button
                    className={scss.deleteBtn}
                    onClick={() => {
                      removeFromBasket(item.id);
                    }}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={scss.total}>
            <h3>
              Итого: <span>{totalPrice} сом</span>
            </h3>
            <button className={scss.orderBtn}>Оформить заказ</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Basket;

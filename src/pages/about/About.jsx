import React from "react";
import scss from "./about.module.scss";

const About = () => {

  return (
    <section className={scss.container}>
      <div className={scss.aboutContainer}>
        <h1>ИНТЕРНЕТ-МАГАЗИН VSTORE.KG</h1>

        <div className={scss.description}>
          <p>
            V!Store – интернет-магазин, у которого более 110 филиалов по всему
            Кыргызстану.
          </p>
          <p>
            В магазинах огромный выбор смартфонов мировых брендов. Есть всё, для
            подключения к скоростному мобильному интернету: роутеры, винглы,
            семейные комплекты для дома!
          </p>
          <p>
            Больше 20 000 аксессуаров для мобильных устройств: кабели,
            переходники, адаптеры, акустические колонки и наушники, ультрамодные
            сумки, бананки и рюкзаки, портативные зарядки, устройства для
            системы «Умный дом» и многое другое.
          </p>
        </div>

        <div className={scss.features}>
          <div className={scss.feature}>
            <div className={scss.icon}>🏅</div>
            <p>
              Только сертифицированный товар от официальных поставщиков.
              Гарантийное обслуживание.
            </p>
          </div>

          <div className={scss.feature}>
            <div className={scss.icon}>0%</div>
            <p>
              Смартфон можно купить В КРЕДИТ или В РАССРОЧКУ без процентов и
              переплаты.
            </p>
          </div>

          <div className={scss.feature}>
            <div className={scss.icon}>🎁</div>
            <p>Постоянные Акции, Скидки и Специальные предложения.</p>
          </div>

          <div className={scss.feature}>
            <div className={scss.icon}>🚚</div>
            <p>Бесплатная доставка по Бишкеку.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useState } from "react";
import scss from "./catalog.module.scss";
import { GrBottomCorner } from "react-icons/gr";

const Catalog = () => {
  const minPrice = 9000;
  const maxPrice = 132000;
  const [minValue, setMinValue] = useState(minPrice); // "От"
  const [maxValue, setMaxValue] = useState(maxPrice); // "До"

  return (
    <section className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.phones}>
            <h4>Уточнить раздел</h4>
            <div className={scss.phoneCard}>
              <p>Apple</p>
              <hr />
              <p>Samsung</p>
              <hr />
              <p>Honor</p>
              <hr />
              <p>Xiaomi</p>
              <hr />
              <p>Poco</p>
              <hr />
              <p>Tecno</p>
              <hr />
              <p>Oppo</p>
              <hr />
              <p>Infinix</p>
              <hr />
              <p>Vivo</p>
              <hr />
              <p>RealMe</p>
              <hr />
            </div>
          </div>
          <div className={scss.phones}>
            <h4>Фильтр по параметрам:</h4>
            <div className={scss.filterCard}>
              <div className={scss.cardPrice}>
                <p>Розничная цена:</p>

                <div className={scss.priceSlider}>
                  <label>От: {minValue} сом</label>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={minValue}
                    onChange={(e) =>
                      setMinValue(Math.min(Number(e.target.value), maxValue))
                    }
                  />

                  <label>До: {maxValue} сом</label>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={maxValue}
                    onChange={(e) =>
                      setMaxValue(Math.max(Number(e.target.value), minValue))
                    }
                  />

                  <div className={scss.priceLimits}>
                    <span>{minPrice}</span>
                    <span>{maxPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;

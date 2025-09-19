import React, { useState } from "react";
import scss from "./catalog.module.scss";
import { GrBottomCorner } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

const Catalog = () => {
  const navigate = useNavigate()
   const { setCategory } = useProductContext();
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
              <p onClick={() => setCategory('ALL')}>ALL</p>
              <hr />
              <p onClick={() => setCategory('Apple')}>Apple</p>
              <hr />
              <p onClick={() => setCategory('Samsung')}>Samsung</p>
              <hr />
              <p onClick={() => setCategory('Honor')}>Honor</p>
              <hr />
              <p onClick={() => setCategory('Xiaomi')}>Xiaomi</p>
              <hr />
              <p onClick={() => setCategory('Poco')}>Poco</p>
              <hr />
              <p onClick={() => setCategory('Tecno')}>Tecno</p>
              <hr />
              <p onClick={() => setCategory('Oppo')}>Oppo</p>
              <hr />
              <p onClick={() => setCategory('Infinix')}>Infinix</p>
              <hr />
              <p onClick={() => setCategory('Vivo')}>Vivo</p>
              <hr />
              <p onClick={() => setCategory('RealMe')}>RealMe</p>
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

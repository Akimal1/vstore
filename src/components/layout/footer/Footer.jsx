import React from "react";
import scss from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.cards}>
            <div className={scss.card}>
              <h3>Каталог</h3>
              <a href="#">Товары со скидкой</a>
              <a href="#">Мобильные телефоны</a>
              <a href="#">Устройства для интернета и ТВ</a>
              <a href="#">Наушники, колонки и аудио</a>
              <a href="#">Сумки</a>
              <a href="#">Часы</a>
              <a href="#">SIM-карты O!</a>
              <a href="#">Гаджеты и умные устройства</a>
              <a href="#">Электросамокаты</a>
              <a href="#">Аксессуары</a>
            </div>

            <div className={scss.card}>
              <h3>Акции</h3>
              <a href="#">
                Смартфоны в рассрочку до 9 <br />
                месяцев без переплат и первого <br />
                платежа в O!Store
              </a>
              <a href="#">
                Заказывайте на сайте ostore.kg <br />
                и получайте наушники + <br />
                пауэрбанк В ПОДАРОК!
              </a>
              <a href="#">
                Купи любой смартфон и получи <br />
                ЦЕЛЫХ 20 ГБ интернета В <br />
                ПОДАРОК
              </a>
              <a href="#">
                При покупке любого смартфона <br />
                Vivo каждый покупатель <br />
                получит гарантированный <br />
                подарок
              </a>
            </div>

            <div className={scss.card}>
              <h3>Помощь и сервисы</h3>
              <a href="#">Главная</a>
              <a href="#">О магазине</a>
              <a href="#">Гарантия</a>
              <a href="#">Доставка</a>
              <a href="#">Кредит</a>
              <a href="#">Вопрос-ответ</a>
              <a href="#">Контакты</a>
              <a href="#">O!</a>
            </div>

            <div className={scss.card}>
              <h1>
                <span>V</span>store
              </h1>

              <p>
                Copyright 2025 © ostore.kg <br />
                Интернет-магазин мобильного оператора О!
                <br />
                Все права защищены
              </p>
              <p className="hr">
                Головной офис: <br />
                ОсОО «НУР Телеком» <br />
                Кыргызская Республика, 720040, <br />
                г. Бишкек, ул. Абдрахманова 170/2, блок 2.{" "} <br />
              </p>
               <a style={{color: 'red',}} href="/ru/about/contacts/" className="showMap">
                  Все адреса VStore
                </a>
            </div>

            <div className={scss.card}>
              <div className={scss.phone}>
                <img
                  style={{ width: "40px" }}
                  src="https://ostore.kg/upload/medialibrary/eb4/logo phone.PNG"
                  alt=""
                />
                <a style={{ fontSize: "20px" }} href="tel:0705007000">
                  0 708 329 129
                </a>
              </div>
              <p>
                Email: <a href="mailto:info@ostore.kg">info@ostore.kg</a>
              </p>
              <p>График работы</p>
              <p>Пн-Вс: с 09:00 до 21:00</p>
              <p>Без выходных</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
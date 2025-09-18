import React from "react";
import scss from "./header.module.scss";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <section className={scss.container}>
      <div className={scss.container}>
        <div className={scss.maincontainer}>
          <div className={scss.headerTop}>
            <div className={scss.headerLeft}>
              <p>Главная</p>
              <p>О магазине</p>
              <p>Гарантия</p>
              <p>Доставка</p>
              <p>Кредит</p>
              <p>Контакты</p>
            </div>
            <div className={scss.headerRight}>
              <p>0708329129</p>
              <p>Вход</p>
              <p>Регистрация</p>
            </div>
          </div>
          <div className={scss.headerBottom}>
            <h1 onClick={() => navigate("/admin")}>
              <span>V</span>store
            </h1>
            <div className={scss.searchWrapper}>
              <CiSearch className={scss.leftIcon} />
              <input type="text" placeholder="Поиск по каталогу магазина" />
              <FaArrowRight className={scss.rightIcon} />
            </div>

            <span className={scss.cart}>
              <IoCartOutline />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

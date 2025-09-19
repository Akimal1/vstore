import React from "react";
import scss from "./header.module.scss";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  console.log(user);
  return (
    <section className={scss.container}>
      <div className={scss.container}>
        <div className={scss.maincontainer}>
          <div className={scss.headerTop}>
            <div className={scss.headerLeft}>
              <p onClick={() => navigate("/")}>Главная</p>
              <p>О магазине</p>
              <p>Гарантия</p>
              <p>Доставка</p>
              <p>Кредит</p>
              <p>Контакты</p>
            </div>
            <div className={scss.headerRight}>
              {!user && (
                <>
                  <p>Вход</p>
                  <p onClick={() => navigate("/register")}>Регистрация</p>
                </>
              )}

              {user && (
                <div className={scss.userInfo}>
                  <img src={user?.photoURL} alt="" />
                  <div className={scss.userTitle}>
                    <p>{user?.displayName}</p>
                    <p>{user?.email}</p>
                  </div>
                </div>
              )}
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

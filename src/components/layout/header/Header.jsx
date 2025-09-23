import React, { useEffect, useState } from "react";
import scss from "./header.module.scss";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import { useProductContext } from "../../../context/ProductContext";

const Header = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const { user, logOut, delteteAccount } = useAuthContext();
  const { searchPhone } = useProductContext();

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    searchPhone(val);
  };

  return (
    <section className={scss.container}>
      <div className={scss.container}>
        <div className={scss.maincontainer}>
          <div className={scss.headerTop}>
            <div className={scss.headerLeft}>
              <p onClick={() => navigate("/")}>Главная</p>
              <p onClick={() => navigate("/about")}>О магазине</p>
              <p onClick={() => navigate("/warranty")}>Гарантия</p>
              <p onClick={() => navigate("delivery")}>Доставка</p>
              <p onClick={() => navigate("contacts")}>Контакты</p>
            </div>
            <div className={scss.headerRight}>
              {!user && (
                <>
                  <p onClick={() => navigate("/login")}>Вход</p>
                  <p onClick={() => navigate("/register")}>Регистрация</p>
                </>
              )}

              {user && (
                <div
                  onClick={() => setIsModal(!isModal)}
                  className={scss.userInfo}
                >
                  <img src={user?.photoURL} alt="" />
                  <div className={scss.userTitle}>
                    {user?.role === "admin" ? (
                      <span>Admin</span>
                    ) : (
                      <span>User</span>
                    )}

                    <p>{user?.displayName}</p>
                    <p>{user?.email}</p>
                  </div>
                </div>
              )}
              {isModal && (
                <div className={scss.modal}>
                  <p
                    onClick={() => {
                      logOut();
                      setIsModal(false);
                    }}
                  >
                    Log Out
                  </p>
                  <p
                    onClick={() => {
                      delteteAccount();
                      setIsModal(false);
                    }}
                  >
                    {" "}
                    Delete Account
                  </p>
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
              <input
                onChange={handleChange}
                type="text"
                placeholder="Поиск по каталогу магазина"
              />
              <FaArrowRight className={scss.rightIcon} />
            </div>

            <span
              onClick={() => setSearchValue(e.target.value)}
              className={scss.cart}
            >
              <IoCartOutline />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

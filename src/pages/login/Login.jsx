import React, { useState } from "react";
import scss from "./login.module.scss";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signInWithGoogle, login } = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      toast.success(`Ссылка для сброса пароля отправлена на ${resetEmail}`);
      setIsForgotOpen(false);
      setResetEmail("");
    } catch (error) {
      console.error("Ошибка при сбросе пароля:", error.message);
      toast.error("Ошибка: " + error.message);
    }
  };

  return (
    <section className="container">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className={scss.loginContainer}>
        <div className={scss.tabs}>
          <span onClick={() => navigate("/")} className={scss.active}>
            ПЕРЕЙТИ НА САЙТ
          </span>
          <span onClick={() => navigate("/register")}>ЗАРЕГИСТРИРОВАТЬСЯ</span>
        </div>

        <form
          className={scss.loginForm}
          onSubmit={(e) => {
            e.preventDefault();
            login(email, password);
          }}
        >
          <label>
            Email*
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Введите email"
              value={email}
            />
          </label>
          <label>
            Пароль*
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Введите пароль"
              value={password}
            />
          </label>

          <div className={scss.actions}>
            <button
              onClick={() => login(email, password)}
              className={scss.loginBtn}
            >
              Войти
            </button>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsForgotOpen(true);
              }}
              className={scss.forgotLink}
            >
              Забыли свой пароль?
            </a>
          </div>
        </form>

        <div className={scss.socialLogin}>
          <p>Войти как пользователь</p>
          <div className={scss.icons}>
            <FcGoogle onClick={signInWithGoogle} />
          </div>
        </div>
      </div>

      {isForgotOpen && (
        <div
          className={scss.modalOverlay}
          onClick={() => setIsForgotOpen(false)}
        >
          <div className={scss.modal} onClick={(e) => e.stopPropagation()}>
            <h2>Восстановление пароля</h2>
            <input
              type="email"
              placeholder="Введите ваш email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <div className={scss.modalActions}>
              <button onClick={handleResetPassword}>Отправить</button>
              <button onClick={() => setIsForgotOpen(false)}>Закрыть</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;

import React, { useState } from "react";
import scss from "./login.module.scss";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signInWithGoogle, login } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  
  
  const onSubmit = async (data) => {
    
    try {
      await login(data.email, data.password);
      toast.success("Успешный вход!");
      reset(); 
    } catch (error) {
      toast.error("Ошибка: " + error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!resetEmail) {
      toast.error("Введите email для восстановления");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      toast.success(`Ссылка для сброса пароля отправлена на ${resetEmail}`);
      setIsForgotOpen(false);
      setResetEmail("");
    } catch (error) {
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

        <form className={scss.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email*
            <input
              type="email"
              placeholder="Введите email"
              {...register("email", { required: "Введите email" })}
            />
            {errors.email && <p className={scss.error}>{errors.email.message}</p>}
          </label>

          <label>
            Пароль*
            <input
              type="password"
              placeholder="Введите пароль"
              {...register("password", { required: "Введите пароль" })}
            />
            {errors.password && (
              <p className={scss.error}>{errors.password.message}</p>
            )}
          </label>

          <div className={scss.actions}>
            <button type="submit" className={scss.loginBtn}>
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

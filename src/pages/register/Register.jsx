import React, { useState } from "react";
import styles from "./register.module.scss";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../context/AuthContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createAccount, signInWithGoogle } = useAuthContext();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      await createAccount({
        email: data.email,
        password: data.password,
        username: data.username,
        avatar: data.avatar,
        phone: data.phone,
        surName: data.surName,
      });
      reset();
      toast.success("Аккаунт успешно создан!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Вход через Google успешен!");
      navigate("/");
    } catch (error) {
      toast.error("Ошибка входа через Google: " + error.message);
    }
  };

  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className={styles.formContainer}>
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Имя:*</label>
            <input
              {...register("username", { required: "Введите имя" })}
              type="text"
            />
            {errors.username && (
              <span className={styles.error}>{errors.username.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Фамилия:*</label>
            <input
              {...register("surName", { required: "Введите фамилию" })}
              type="text"
            />
            {errors.surName && (
              <span className={styles.error}>{errors.surName.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Email:*</label>
            <input
              {...register("email", { required: "Введите email" })}
              type="email"
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Пароль:*</label>
            <input
              {...register("password", {
                required: "Введите пароль",
                minLength: { value: 6, message: "Минимум 6 символов" },
              })}
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Скрыть" : "Показать"}
            </button>
            {errors.password && (
              <span className={styles.error}>{errors.password.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Подтверждение пароля:*</label>
            <input
              {...register("confirmPassword", {
                required: "Подтвердите пароль",
                validate: (value) =>
                  value === password || "Пароли не совпадают",
              })}
              type="password"
            />
            {errors.confirmPassword && (
              <span className={styles.error}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Мобильный:*</label>
            <input
              {...register("phone", { required: "Введите телефон" })}
              type="tel"
            />
            {errors.phone && (
              <span className={styles.error}>{errors.phone.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Фото (URL):*</label>
            <input
              {...register("avatar", { required: "Введите URL фото" })}
              type="text"
            />
            {errors.avatar && (
              <span className={styles.error}>{errors.avatar.message}</span>
            )}
          </div>

          <div className={styles.formActions}>
            <button type="submit">Регистрация</button>
            <button type="button" onClick={handleGoogleSignIn}>
              Вход в аккаунт через <FcGoogle />
            </button>
          </div>

          <p>
            Пароль должен быть не менее 6 символов.
            <br />
            *Поля обязательные для заполнения.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

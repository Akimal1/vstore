import React from "react";
import scss from "./admin.module.scss";

const Admin = () => {
  return (
    <section className={scss.container}>
      <div className="container">
        <form className={scss.mainContainer}>
          <div className={scss.field}>
            <input
              //   {...register("name")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Имя</span>
          </div>

          <div className={scss.field}>
            <input
              //   {...register("description")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Производитель</span>
          </div>

          <div className={scss.field}>
            <input
              //   {...register("image")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Память</span>
          </div>
          <div className={scss.field}>
            <input
              //   {...register("image")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Операционная система</span>
          </div>
          <div className={scss.field}>
            <input
              //   {...register("image")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Процессор</span>
          </div>
          <div className={scss.field}>
            <input
              //   {...register("image")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Цвет</span>
          </div>

          <div className={scss.field}>
            <input
              //   {...register("category")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Дата выпуска</span>
          </div>

          <div className={scss.field}>
            <input
              //   {...register("category")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Дата выпуска</span>
          </div>
          <div className={scss.field}>
            <input
              //   {...register("category")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Дата </span>
          </div>
          <div className={scss.btns}>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Admin;

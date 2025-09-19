import React, { useEffect } from "react";
import scss from "../../pages/admin/admin.module.scss";
import { useProductContext } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneProduct, oneProduct, updateProduct } = useProductContext();
  const { reset, handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    await updateProduct(id, data);
    navigate("/");
    console.log(data);
  };

  useEffect(() => {
    getOneProduct(id);
  }, [id, getOneProduct]);

  useEffect(() => {
    if (oneProduct && Object.keys(oneProduct).length > 0) {
      reset({
        name: oneProduct.name,
        image: oneProduct.image,
        producer: oneProduct.producer,
        ram: oneProduct.ram,
        system: oneProduct.system,
        cpu: oneProduct.cpu,
        color: oneProduct.color,
        date: oneProduct.date,
        price: oneProduct.price,
      });
    }
  }, [oneProduct]);

  return (
    <section className={scss.container}>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className={scss.mainContainer}>
          <div className={scss.field}>
            <input
              {...register("name")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Имя</span>
          </div>
          <div className={scss.field}>
            <input
              {...register("image")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>image</span>
          </div>

          <div className={scss.field}>
            <input
              {...register("producer")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Производитель</span>
          </div>

          <div className={scss.field}>
            <input
              {...register("ram")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Память</span>
          </div>
          <div className={scss.field}>
            <input
              {...register("system")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Операционная система</span>
          </div>
          <div className={scss.field}>
            <input
              {...register("cpu")}
              className={scss.input}
              type="text"
              placeholder=""
            />
            <span className={scss.label}>Процессор</span>
          </div>
          <div className={scss.field}>
            <input
              {...register("color")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Цвет</span>
          </div>

          <div className={scss.field}>
            <input
              {...register("date")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>Дата выпуска</span>
          </div>
          <div className={scss.field}>
            <input
              {...register("price")}
              className={scss.input}
              type="text"
              placeholder=" "
            />
            <span className={scss.label}>цена</span>
          </div>
          <div className={scss.btns}>
            <button type="submit">Сохранить</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdatePage;

import React from "react";
import scss from "./contacts.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";

const Contacts = () => {
  const contacts = [
    {
      icon: <BsFillTelephoneFill />,
      title: "Телефон:",
      value: "0 708 329 129",
      link: "tel:0708329129",
    },
    {
      icon: <MdOutlineAlternateEmail />,
      title: "E-mail:",
      value: "info@vstore.kg",
      link: "mailto:info@vstore.kg",
    },
    {
      icon: <FaLocationDot />,
      title: "г. Бишкек",
      value: "улица Тыналиева, 2/7",
    },
    {
      icon: <MdWorkHistory />,
      title: "График работы:",
      value: "Пн-Вс: с 09:00 до 21:00 | Без выходных",
    },
  ];

  return (
    <section className={scss.container}>
      <h1>Контакты</h1>
      <div className={scss.grid}>
        {contacts.map((c, i) => (
          <div className={scss.card} key={i}>
            <div className={scss.icon}>{c.icon}</div>
            <div className={scss.info}>
              <h3>{c.title}</h3>
              {c.link ? (
                <a href={c.link} className={scss.link}>
                  {c.value}
                </a>
              ) : (
                <p>{c.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;

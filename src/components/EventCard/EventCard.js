import React from "react";
import "./EventCard.css";

const EventCard = ({ hot, address }) => {
  const cardClassName = hot ? "card-hot" :  "card";

  return (
    <article className={cardClassName}>
      <a className="card__link" href={address} target="_blank" rel="noreferrer">
        <img
          className="card__img"
          src="https://thumb.tildacdn.com/tild3138-3431-4763-a235-333163613766/-/resize/520x/-/format/webp/2152x1369_.jpg"
          alt="Восточный Stand Up: «Горячий вечер»: Хетаг Хугаев, Самвел
                Кафьян, Динара Курбанова, Тимур Хамадуллин"
        />
        <div className="card__content">
          <h4 className="card__title">
            Восточный Stand Up: «Горячий вечер»: Хетаг Хугаев, Самвел Кафьян,
            Динара Курбанова, Тимур Хамадуллин.
          </h4>
          <ul className="card__details">
            <li className="card__detail">
              <p>Дата мероприятия: <b className="card__date">05.11.2022</b></p>
            </li>
            <li className="card__detail">
              <p>Сбор гостей: 20:30</p>
            </li>
            <li className="card__detail">
              <p>Начало: 21:00</p>
            </li>
            <li className="card__detail">
              <p>
                Во время мероприятия работает кухня и бар.
              </p>
            </li>
          </ul>
        </div>
      </a>
    </article>
  );
};

export default EventCard;

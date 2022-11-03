import React from "react";
import "./EventCard.css";

const EventCard = ({ hot, address }) => {
  const cardClassName = hot ? "card-hot" : "card";

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
              <p className="card__date">Дата мероприятия: 05.11.2022</p>
            </li>
            <li className="card__detail">
              <p className="crad__meeting">Сбор гостей: 20:30</p>
            </li>
            <li className="card__detail">
              <p className="card__start-time">Начало: 21:00</p>
            </li>
            <li className="card__detail">
              <p className="card__kitchen">
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

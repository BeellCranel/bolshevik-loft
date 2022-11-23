import React from "react";
import { OfferForm } from "../../components";
import "./ContactsPage.scss";

export const ContactsPage = () => {
  return (
    <main className="contactsPage">
      <section className="contactsPage__contacts-wrapper">
        <h2 className="contactsPage__title">НАШИ КОНТАКТЫ:</h2>
        <ul className="contactsPage__list">
          <li className="contactsPage__list-item">
            <p className="contactsPage__text">
              Ежедневно: <strong>10:00−22:00</strong>
            </p>
          </li>
          <li className="contactsPage__list-item">
            <p className="contactsPage__text">
              Администратор: <strong>+7 977-335-34-35</strong>
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=79773353435&text&app_absent=0"
              rel="noreferrer"
              target="_blank"
            >
              <div className="contactsPage__whatsapp" />
            </a>
            <a
              href="https://t.me/bolshevikloft"
              rel="noreferrer"
              target="_blank"
            >
              <div className="contactsPage__telegram" />
            </a>
          </li>
          <li className="contactsPage__list-item">
            <p className="contactsPage__text">
              Почта:{" "}
              <strong>
                <a
                  href="mailto:info@bolshevikloft.ru"
                  className="contactsPage__link"
                  rel="noreferrer"
                  target="_blank"
                >
                  info@bolshevikloft.ru
                </a>
              </strong>
            </p>
          </li>
          <li className="contactsPage__list-item">
            <p className="contactsPage__text">
              Адрес:{" "}
              <strong>
                Москва, Ленинградский проспект дом 15, стр.1 (БЦ "Большевик")
              </strong>
            </p>
          </li>
          <li className="contactsPage__list-item">
            <div className="contactsPage__yandex-map">
              <iframe
                title="map"
                src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1728012388"
                width="100%"
                height="100%"
                frameBorder="0"
              />
            </div>
          </li>
        </ul>
      </section>
      <section className="contactsPage__form-wrapper">
        <h2 className="contactsPage__title">
          Получить коммерческое предложение по мероприятию:
        </h2>
        <OfferForm />
      </section>
    </main>
  );
};

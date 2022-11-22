import React from "react";
import { OfferForm } from "../../components";
import "./ContactsPage.scss";

export const ContactsPage = () => {
  return (
    <main className="contactsPage">
      <section className="contactsPage__contacts">
        <div className="contactsPage__contacts-wrapper">
          <h2 className="contactsPage__title">НАШИ КОНТАКТЫ:</h2>
          <p className="contactsPage__text">
            <strong>Ежедневно: 10:00−22:00</strong>
          </p>
          <p className="contactsPage__text">
            <strong>
              Администратор: +7 977-335-34-35 (
              <a
                href="https://api.whatsapp.com/send/?phone=79773353435&text&app_absent=0"
                className="contactsPage__link"
                rel="noreferrer"
                target="_blank"
              >
                <strong>WhatsApp</strong>
              </a>
              )
            </strong>
          </p>
          <p className="contactsPage__text">
            <strong>
              Почта:{" "}
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
          <p className="contactsPage__text">
            <strong>
              Адрес: Москва, Ленинградский проспект дом 15, стр.1 (БЦ
              "Большевик")
            </strong>
          </p>
        </div>
        <div>
          <h3 className="contactsPage__title">
            Получить коммерческое предложение по мероприятию:
          </h3>
          <OfferForm />
        </div>
      </section>
      <section className="contactsPage__location">
        <div className="contactsPage__title-wrapper">
          <h2 className="contactsPage__text">Расположение :</h2>
          <p className="contactsPage__text">
            Ближайшая станция метро Белорусская.
          </p>
          <p className="contactsPage__text">
            Адрес: г. Москва, Ленинградский проспект дом 15, стр.1
          </p>
        </div>
        <div className="contactsPage__yandex-map">
          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1728012388"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      </section>
    </main>
  );
};

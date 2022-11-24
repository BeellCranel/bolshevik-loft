import React from "react";
import {Contacts} from "../";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__gray-strip" />
      <p className="footer__title">
        <strong>
          Bolshevik Loft | Большевик Лофт | Площадка для проведения мероприятий
        </strong>
      </p>
      <p className="footer__address">
        <strong>г. Москва, Ленинградский проспект дом 15, стр.1</strong>
      </p>
      <Contacts />
      <p className="footer__ooo">
        ООО "БОЛЬШЕВИК ХОЛЛ" ИНН: 9705151781 ОГРН: 1217700018250 ТЕЛЕФОН:
        +79773353435
      </p>
    </footer>
  );
};

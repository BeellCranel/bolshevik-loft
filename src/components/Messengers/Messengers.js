import React from "react";
import "./Messengers.scss";
import telegramIcon from "../../vendor/images/messengers/telegram.svg";
import whatsappIcon from "../../vendor/images/messengers/whatsapp.svg";

export const Messengers = () => {
  return (
    <div className="messengers">
      <h3 className="messengers__title">Связаться в месенджерах:</h3>
      <nav className="messengers__nav">
        <ul className="messengers__list">
          <li className="messengers__item">
            <a
              href="https://t.me/bolshevikloft"
              className="messengers__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={telegramIcon}
                alt="Telegram icon"
                className="messengers__link-icon"
              />
            </a>
          </li>
          <li className="messengers__item">
            <a
              href="https://api.whatsapp.com/send/?phone=79773353435&text&app_absent=0"
              className="messengers__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={whatsappIcon}
                alt="Whatsapp icon"
                className="messengers__link-icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

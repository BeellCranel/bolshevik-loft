import React from "react";
import "./MainPageHeader.css";
import telegramIcon from "../../../vendor/images/messengers/telegram.svg";
import whatsappIcon from "../../../vendor/images/messengers/whatsapp.svg";

const MainPageHeader = () => {
  return (
    <header className="main-header">
      <div className="main-header__background"></div>
      <section className="main-header__about">
        <div className="main-header__title-wrapper">
          <h2 className="main-header__title" lang="en">
            Bolshevik Loft
          </h2>
          <div className="main-header__messengers">
            <nav className="main-header__messengers-nav">
              <ul className="main-header__messengers-list">
                <li className="main-header__messengers-item">
                  <a
                    href="https://t.me/bolshevikloft"
                    className="main-header__messengers-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={telegramIcon}
                      alt="Telegram icon"
                      className="main-header__link-icon"
                      lang="en"
                    />
                  </a>
                </li>
                <li className="main-header__messengers-item">
                  <a
                    href="https://api.whatsapp.com/send/?phone=79773353435&text&app_absent=0"
                    className="main-header__messengers-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={whatsappIcon}
                      alt="Whatsapp icon"
                      className="main-header__link-icon"
                      lang="en"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="main-header__subtitle-wrapper">
          <span className="main-header__icon" />
          <p className="main-header__subtitle main-header__subtitle-one text-style">
            Универсальный банкетный зал для проведения мероприятий.
          </p>

          <p className="main-header__subtitle main-header__subtitle-two text-style">
            У нас проводят свадьбы, юбилеи, корпоративы, презентации,
            конференции, стендап-концерты и детские праздники.
          </p>
        </div>
      </section>
    </header>
  );
};

export default MainPageHeader;

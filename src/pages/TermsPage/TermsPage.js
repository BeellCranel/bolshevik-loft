import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui-kit";
import "./TermsPage.scss";

export const TermsPage = ({
  offerPopupOpenHandler,
  presentationPopupOpenHandler,
  bodyFixClosePopup,
}) => {
  return (
    <main className="terms">
      <header className="terms__header">
        <div className="terms__title-wrapper">
          <h2 className="terms__title">Условия организации мероприятий.</h2>
          <p className="terms__subtitle">
            Стоимость Услуг для проведения мероприятия зависит от дня недели и
            включает в себя:
          </p>
          <Button
            type="button"
            className="terms__presentation-btn"
            onClick={presentationPopupOpenHandler}
          >
            Смотреть презентацию
          </Button>
        </div>
      </header>
      <section className="terms__main">
        <article className="term term-one">
          <h2 className="term__title">Мероприятие в формате Банкет</h2>
          <ul className="term__items">
            <li className="term__item">
              <p className="term__item-text">
                Аренда зала и оборудования (технический райдер)
              </p>
            </li>
            <li className="term__item">
              <p className="term__item-text">
                Депозит на банкетное меню, включает еду и напитки
              </p>
            </li>
            <li className="term__item">
              <p className="term__item-text">
                Сервисное обслуживание включает официантов, бармена, клининг и
                гардероб
              </p>
            </li>
          </ul>
        </article>
        <article className="term">
          <h2 className="term__title">Мероприятие в формате Фуршет</h2>
          <ul className="term__items">
            <li className="term__item">
              <p className="term__item-text">
                Аренда зала и оборудования (технический райдер)
              </p>
            </li>
            <li className="term__item">
              <p className="term__item-text">
                Депозит на фуршетное меню, включает еду и напитки
              </p>
            </li>
            <li className="term__item">
              <p className="term__item-text">
                Сервисное обслуживание включает официантов, бармена, клининг и
                гардероб
              </p>
            </li>
          </ul>
        </article>
        <article className="term term-three">
          <h2 className="term__title">Конференции</h2>
          <ul className="term__items">
            <li className="term__item">
              <p className="term__item-text">
                Аренда зала и оборудования (технический райдер)
              </p>
            </li>
            <li className="term__item">
              <p className="term__item-text">
                Депозит на меню кофе-брейков, включает еду и напитки
              </p>
            </li>
            <li className="term__item">
              <p className="term__item-text">
                Сервисное обслуживание включает официантов, бармена, клининг и
                гардероб
              </p>
            </li>
          </ul>
        </article>
      </section>
      <footer className="terms__footer">
        <p>Возможна аренда зала со своим кейтерингом.</p>
        <p>
          Мы всегда рады пойти навстречу нашим заказчикам и готовы обсудить
          специальные условия и цены для проведения вашего мероприятия. Для
          получения индивидуальных условий заполните форму ниже, либо позвоните
          или напишите нашему менеджеру в{" "}
          {
            <Link
              className="terms__link"
              to="/contacts"
              onClick={() => window.scrollTo(0, parseInt("0"))}
            >
              отдел продаж
            </Link>
          }
          .
        </p>
        <button
          type="button"
          className="terms__offer"
          onClick={offerPopupOpenHandler}
        >
          Получить комерческое предложение по мероприятию
        </button>
      </footer>
    </main>
  );
};

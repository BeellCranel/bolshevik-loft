import React from "react";
import "./CharacteristicsPage.scss";
import { Button } from "../../ui-kit";
import rider from "../../vendor/images/characteristics/rider.jpg";

export const CharacteristicsPage = ({ presentationPopupOpenHandler, riderPopupOpenHandler }) => {
  return (
    <main className="characteristics">
      <header className="characteristics__header">
        <Button
          type="button"
          className="characteristics__presentation-btn"
          onClick={presentationPopupOpenHandler}
        >
          Смотреть презентацию
        </Button>
      </header>
      <section className="characteristics__main">
        <div className="characteristics__title-wrapper">
          <h2 className="characteristics__title">
            Характеристики пространства.
          </h2>
          <p className="characteristics__subtitle">
            <b>Bolshevik Loft</b> – это многофункциональный зал в потрясающем
            историческом здании из красного кирпича, в брутальном, лофтовом
            стиле. Идеально подходит для мероприятий различного масштаба и
            формата. Площадь пространства более 250 кв.м., основной зал - 200
            м2, входная зона, гардероб на 200 персон, гримерная комната,
            собственная кухня, высота потолков 5 метров. Конференция – до 120
            человек Банкет - до 120 человек Фуршет - до 160 человек Квизы, игры
            от 40 до 200 персон Стендапы от 60 до 175 человек
          </p>
          <p className="characteristics__subtitle">
            Дизайн выполнен в стиле современного городского лофта с минимальным
            количеством декоративных элементов. Это позволяет воплощать
            декораторам наших заказчиков практически любые замыслы.
          </p>
        </div>
        <div className="characteristics__main-wrapper">
          <h3 className="characteristics__title">
            Для вашего мероприятия мы предлагаем Вам :
          </h3>
          <ul className="characteristics__list">
            <li className="characteristics__list-item">
              <p className="characteristics__subtitle">
                Профессиональное концертное звуковое и световое оборудование с
                сопровождением
              </p>
            </li>
            <li className="characteristics__list-item">
              <p className="characteristics__subtitle">
                Собственная полностью оборудованная кухня, с гарантией высокого
                качества блюд
              </p>
            </li>
            <li className="characteristics__list-item">
              <p className="characteristics__subtitle">
                Широкий спектр светового оформления: искусственный и
                естественный свет позволяют одинаково успешно провести, как
                бизнес-завтрак с деловой презентацией, так и вечерний концерт.
              </p>
            </li>
            <li className="characteristics__list-item">
              <p className="characteristics__subtitle">
                Профессиональное видеооборудование: Экран 3х4, 8 плазм,
                дополнительно предоставляется светодиодный экран и услуги VJ.
              </p>
            </li>
            <li className="characteristics__list-item">
              <p className="characteristics__subtitle">
                Модульная сцена 2х3м (либо 3x3м), высота 40см. с возможностью
                перестановки и трансформации
              </p>
            </li>
            <li className="characteristics__list-item">
              <p className="characteristics__subtitle">
                Отдельная гримёрная, своя мебель, гардероб.
              </p>
            </li>
          </ul>
        </div>
        <div className="characteristics__rider">
          <h3 className="characteristics__title">ТЕХНИЧЕСКИЙ РАЙДЕР</h3>
          <img
            src={rider}
            className="characteristics__rider-img"
            alt="Схема зала"
          />
          <div className="characteristics__content-wrapper">
            <p className="characteristics__subtitle">
              <b>ЭЛЕКТРИЧЕСТВО:</b> 2 линии по 16А, бытовые розетки Schuko.
              Максимальная мощность 7кВт По отдельному согласованию возможно
              предоставление CEE 380В 32А
            </p>
            <p className="characteristics__subtitle">
              <b>ЗВУК:</b> Общая мощность звука - 6кВт RMS Стационарно
              установлено достаточное количество оборудования для проведения
              большинства корпоративных мероприятий, наличие Delay-линий в зале
              позволяет получить равномерное покрытие звуком всей площадки. В
              наличии 2 радиомикрофона Sennheiser. По запросу возможно
              выполнение любого технического райдера аккредитованным
              подрядчиком.
            </p>
            <p className="characteristics__subtitle">FOH: Mackie DL1608</p>
            <p className="characteristics__subtitle">PA: QSC K</p>
            <div className="characteristics__presentations">
              <Button onClick={riderPopupOpenHandler}>Скачать технический райдер</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

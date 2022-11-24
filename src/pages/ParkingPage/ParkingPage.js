import React from "react";
import "./ParkingPage.scss";
import mainImg from "../../vendor/images/parking/parking-main.png";
import businessParking from "../../vendor/images/parking/parking-bc.png";

export const ParkingPage = () => {
  return (
    <main className="parking">
      <section className="parking__main">
        <h2 className="parking__title">парковка</h2>
        <img
          className="parking__main-img"
          src={mainImg}
          alt="Фотография близжайших парковочных мест"
        />
      </section>
      <section className="parking__another">
        <div className="parking__business">
          <p className="parking__text">
            <strong>
              Парковка Бизнес центра располагается на улице Скаковая, между
              домами 24 и 30с2
            </strong>
          </p>
          <p className="parking__text">
            <strong>
              Заказать пропуск через WhatsApp :{" "}
              <a
                className="parking__whatsapp"
                href="https://api.whatsapp.com/send/?phone=79773353435&text&app_absent=0"
                rel="noreferrer"
                target="_blank"
              >
                +7 977 335-34-35
              </a>
            </strong>
          </p>
          <p className="parking__business-parking-title">
            <strong>Въезд на парковку бизнес-центра:</strong>
          </p>
        </div>
        <img
          className="parking__business-parking-img"
          src={businessParking}
          alt="Въезд на парковку бизнес-центра"
        />
      </section>
    </main>
  );
};

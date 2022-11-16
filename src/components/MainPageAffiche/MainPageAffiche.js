import React from "react";
import { Button } from "../../ui-kit";
import { EventCard } from "../";
import Slider from "react-slick";
import "./MainPageAffiche.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MainPageAffiche = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <section className="main-affiche">
      <div className="main-affiche__title-wrapper">
        <h2 className="main-affiche__title">Афиша</h2>
      </div>
      <section className="main-affiche__hot">
        <h3 className="main-affiche__hot-title">Рекомендуем</h3>
        <div className="main-affiche__slider-wrapper">
          <Slider {...settings}>
            <EventCard hot={true} address="https://getafisha.ru/standup/672" />
            <EventCard hot={true} address="https://getafisha.ru/standup/672" />
            <EventCard hot={true} address="https://getafisha.ru/standup/672" />
          </Slider>
        </div>
      </section>
      <section className="main-affiche__all-events">
        <h3 className="main-affiche__hot-title">В близжайшие дни</h3>
        <div className="main-affiche__cards-wrapper">
          <EventCard address="https://getafisha.ru/standup/672" />
          <EventCard address="https://getafisha.ru/standup/672" />
          <EventCard address="https://getafisha.ru/standup/672" />
        </div>
      </section>
      <Button type="button">еще</Button>
    </section>
  );
};

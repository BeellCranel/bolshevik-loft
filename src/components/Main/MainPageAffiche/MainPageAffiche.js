import React from "react";
import Button from "../../../UI/Button/Button";
import EventCard from "../../EventCard/EventCard";
import Slider from "react-slick";
import "./MainPageAffiche.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainPageAffiche = () => {
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
    autoplaySpeed: 7000,
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
            <EventCard hot={true} />
            <EventCard hot={true} />
            <EventCard hot={true} />
          </Slider>
        </div>
      </section>
      <section className="main-affiche__all-events">
        <h3 className="main-affiche__hot-title">В близжайшие дни</h3>
        <div className="main-affiche__cards-wrapper">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
      <Button name="Еще" />
    </section>
  );
};

export default MainPageAffiche;

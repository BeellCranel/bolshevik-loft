import React from "react";
import Slider from "react-slick";
import "./MainPageGallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import itemOne from "../../../vendor/images/gallery/gallery1.jpg";
import itemTwo from "../../../vendor/images/gallery/gallery2.jpg";
import itemThree from "../../../vendor/images/gallery/gallery3.jpg";
import itemFour from "../../../vendor/images/gallery/gallery4.jpg";
import itemFive from "../../../vendor/images/gallery/gallery5.jpg";
import itemSix from "../../../vendor/images/gallery/gallery6.jpg";

const MainPageGallery = ({ imagePopupOpenHandler }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 424,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="main-gallery">
      <div className="main-gallery__title-wrapper">
        <h2 className="main-gallery__title">Галерея</h2>
      </div>
      <div className="main-gallery__slider-wrapper">
        <Slider {...settings}>
          <div
            className="main-gallery__gallery-item"
            onClick={imagePopupOpenHandler}
          >
            <div className="main-gallery__gallery-item-title-wrapper">
              <h3 className="main-gallery__gallery-item-title">
                Новогодние корпоративы
              </h3>
            </div>
            <img
              className="main-gallery__gallery-img"
              src={itemOne}
              alt="Новогодние корпоративы"
            />
          </div>
          <div
            className="main-gallery__gallery-item"
            onClick={imagePopupOpenHandler}
          >
            <div className="main-gallery__gallery-item-title-wrapper">
              <h3 className="main-gallery__gallery-item-title">Свадьбы</h3>
            </div>
            <img
              className="main-gallery__gallery-img"
              src={itemTwo}
              alt="Свадьбы"
            />
          </div>
          <div
            className="main-gallery__gallery-item"
            onClick={imagePopupOpenHandler}
          >
            <div className="main-gallery__gallery-item-title-wrapper">
              <h3 className="main-gallery__gallery-item-title">
                Детские праздники
              </h3>
            </div>
            <img
              className="main-gallery__gallery-img"
              src={itemThree}
              alt="Детские праздники"
            />
          </div>
          <div
            className="main-gallery__gallery-item"
            onClick={imagePopupOpenHandler}
          >
            <div className="main-gallery__gallery-item-title-wrapper">
              <h3 className="main-gallery__gallery-item-title">Презентации</h3>
            </div>
            <img
              className="main-gallery__gallery-img"
              src={itemFour}
              alt="Презентации"
            />
          </div>
          <div
            className="main-gallery__gallery-item"
            onClick={imagePopupOpenHandler}
          >
            <div className="main-gallery__gallery-item-title-wrapper">
              <h3 className="main-gallery__gallery-item-title">Концерты</h3>
            </div>
            <img
              className="main-gallery__gallery-img"
              src={itemFive}
              alt="Концерты"
            />
          </div>
          <div
            className="main-gallery__gallery-item"
            onClick={imagePopupOpenHandler}
          >
            <div className="main-gallery__gallery-item-title-wrapper">
              <h3 className="main-gallery__gallery-item-title">StandUp</h3>
            </div>
            <img
              className="main-gallery__gallery-img"
              src={itemSix}
              alt="Фотоотчет со StandUp"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default MainPageGallery;

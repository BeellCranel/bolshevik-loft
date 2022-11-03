import React from "react";
import "./ImagePopup.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgOne from "../../vendor/images/weddings/-TT----_248.jpg";
import imgTwo from "../../vendor/images/weddings/-TT----_250.jpg";

const ImagePopup = ({ isOpen, onClose }) => {
  const popupClassName = `image-popup${isOpen ? " image-popup__opened" : ""}`;
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 623,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className={popupClassName} onClick={onClose}>
      <div
        className="image-popup__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="image-popup__close-btn" onClick={onClose} />
        <Slider {...settings}>
          <div>
            <figure className="image-popup__figure">
              <img className="image-popup__img" src={imgOne} alt="Свадьба" />
              <figcaption className="image-popup__figcaption">
                Свадьба
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="image-popup__figure">
              <img className="image-popup__img" src={imgTwo} alt="Свадьба" />
              <figcaption className="image-popup__figcaption">
                Свадьба
              </figcaption>
            </figure>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ImagePopup;

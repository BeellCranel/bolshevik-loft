import React from "react";
import Form from "../../UI/Form/Form";
import "./OfferPopup.css";

const OfferPopup = ({ isOpen, onClose }) => {
  const popupClassName = `offer-popup${isOpen ? " offer-popup__opened" : ""}`;
  return (
    <div className={popupClassName} onClick={onClose}>
      <div
        className="offer-popup__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="offer-popup__background-img" />
        <button
          className="offer-popup__close-btn"
          type="button"
          onClick={onClose}
        />
        <div>
          <h2 className="form__title">Получить коммерческое предложение</h2>
          <Form />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default OfferPopup;

import React from "react";
import { OfferForm } from "../";
import "./OfferPopup.scss";
import clsx from "clsx";

export const OfferPopup = ({
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={clsx("offer-popup", isOpen && "offer-popup__opened")}
      onClick={onClose}
    >
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
          <h2 className="offer-popup__title">
            Получить коммерческое предложение
          </h2>
          <OfferForm />
        </div>
      </div>
    </div>
  );
};

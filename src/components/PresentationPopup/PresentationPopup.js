import React from "react";
import "./PresentationPopup.scss";
import clsx from "clsx";

export const PresentationPopup = ({ isOpen, onClose }) => {
  return (
    <div
      className={clsx(
        "PresentationPopup",
        isOpen && "PresentationPopup__opened"
      )}
      onClick={onClose}
    >
      <div
        className="PresentationPopup__container"
        onClick={(e) => e.stopPropagation()}
      >
      <div className="PresentationPopup__close-btn" onClick={onClose}/>
        <iframe
          title="PresentationPopup"
          src="https://drive.google.com/file/d/1ZQCT05i5F6chyMit9RLAJsO6v_P7s1jw/preview"
          width="100%"
          height="100%"
          allow="autoplay"
          frameBorder="none"
        />
      </div>
    </div>
  );
};

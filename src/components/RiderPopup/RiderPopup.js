import React from "react";
import "./RiderPopup.scss";
import clsx from "clsx";

export const RiderPopup = ({ isOpen, onClose }) => {
  return (
    <div
      className={clsx("RiderPopup", isOpen && "RiderPopup__opened")}
      onClick={onClose}
    >
      <div
        className="PresentationPopup__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="PresentationPopup__close-btn" onClick={onClose} />
        <iframe
          title="PresentationPopup"
          src="https://drive.google.com/file/d/1SnVIGQUzM-sqMHpu0ILfGBGW_FLoQ51c/preview"
          width="100%"
          height="100%"
          allow="autoplay"
          frameBorder="none"
        />
      </div>
    </div>
  );
};

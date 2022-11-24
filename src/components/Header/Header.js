import React from "react";
import "./Header.scss";
import { Logo, Burger } from "../../ui-kit";
import { NavPopup } from "../";

export const Header = ({
  modalIsOpen,
  modalOpenHandler,
  modalCloseHandler,
  closeNavPopup,
}) => {
  return (
    <header className="header">
      <Logo />
      <div>
        <Burger
          modalIsOpen={modalIsOpen}
          modalOpenHandler={modalOpenHandler}
          modalCloseHandler={modalCloseHandler}
        />
        <NavPopup
          modalIsOpen={modalIsOpen}
          modalCloseHandler={modalCloseHandler}
          closeNavPopup={closeNavPopup}
        />
      </div>
    </header>
  );
};

import React from "react";
import "./Header.scss";
import { Logo, Burger } from "../../ui-kit";
import { Contacts, NavPopup } from "../";

export const Header = ({
  modalIsOpen,
  modalOpenHandler,
  modalCloseHandler,
  closeNavPopup,
}) => {
  return (
    <header className="header">
      <Logo />
      <Contacts />
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

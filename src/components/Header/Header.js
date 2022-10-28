import React from "react";
import "./Header.css";
import Logo from "../../UI/Logo/Logo";
import Burger from "../../UI/Burger/Burger";
import ModalMenu from "../ModalMenu/ModalMenu";
import Contacts from "../../UI/Contacts/Contacts";

const Header = ({ modalIsOpen, modalOpenHandler, modalCloseHandler }) => {
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
        <ModalMenu
          modalIsOpen={modalIsOpen}
          modalCloseHandler={modalCloseHandler}
        />
      </div>
    </header>
  );
};

export default Header;

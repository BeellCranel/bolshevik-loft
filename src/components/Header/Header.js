import React from "react";
import "./Header.css";
import Logo from "../../UI/Logo/Logo";
import Burger from "../../UI/Burger/Burger";
import ModalMenu from "../ModalMenu/ModalMenu";
import Contacts from "../../UI/Contacts/Contacts";

const Header = ({ modalIsOpen, modalToggleHandler }) => {
  return (
    <header className="header">
      <Logo />
      <Contacts />
      <div>
        <Burger
          modalIsOpen={modalIsOpen}
          modalToggleHandler={modalToggleHandler}
        />
        <ModalMenu modalIsOpen={modalIsOpen} />
      </div>
    </header>
  );
};

export default Header;

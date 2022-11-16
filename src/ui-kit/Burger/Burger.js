import React from "react";
import "./Burger.scss";

export const Burger = ({ modalIsOpen, modalOpenHandler, modalCloseHandler }) => {
  const modalToggleHandler = () => {
    if (modalIsOpen) {
      modalCloseHandler();
    } else {
      modalOpenHandler();
    }
  };
  const itemOne = `burger__item burger__item_type_one${
    modalIsOpen ? " burger__item_type_one-open" : ""
  }`;
  const itemTwo = `burger__item burger__item_type_two${
    modalIsOpen ? " burger__item_type_two-open" : ""
  }`;
  const itemThree = `burger__item burger__item_type_three${
    modalIsOpen ? " burger__item_type_three-open" : ""
  }`;
  const itemFour = `burger__item burger__item_type_four${
    modalIsOpen ? " burger__item_type_four-open" : ""
  }`;
  return (
    <div className="burger" onClick={modalToggleHandler}>
      <div className={itemOne} />
      <div className={itemTwo} />
      <div className={itemThree} />
      <div className={itemFour} />
    </div>
  );
};

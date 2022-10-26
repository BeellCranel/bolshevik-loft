import React from "react";
import "./ModalMenu.css";

const ModalMenu = ({ modalIsOpen }) => {
  const modalMenuClassName = `modal-menu${
    modalIsOpen ? " modal-menu-opened" : ""
  }`;
  const modalMenuContentClassName = `modal-menu__nav${
    modalIsOpen ? " modal-menu__nav-opened" : ""
  }`;

  return (
    <div className={modalMenuClassName}>
      <nav className={modalMenuContentClassName}>
        <ul className="modal-menu__wrapper">
          <li className="modal-menu__item">
            <p className="modal-menu__text">главная</p>
          </li>
          <li className="modal-menu__item">
            <p className="modal-menu__text">афиша</p>
          </li>
          <li className="modal-menu__item">
            <p className="modal-menu__text">организация мероприятий</p>
          </li>
          <li className="modal-menu__item">
            <p className="modal-menu__text">характеристика пространства</p>
          </li>
          <li className="modal-menu__item">
            <p className="modal-menu__text">галерея</p>
          </li>
          <li className="modal-menu__item">
            <p className="modal-menu__text">контакты</p>
          </li>
          <li className="modal-menu__item">
            <p className="modal-menu__text">парковка</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ModalMenu;

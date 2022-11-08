import React from "react";
import { NavLink } from "react-router-dom";
import "./ModalMenu.css";

const ModalMenu = ({ modalIsOpen, modalCloseHandler }) => {
  const modalMenuClassName = `modal-menu${
    modalIsOpen ? " modal-menu-opened" : ""
  }`;
  const modalMenuContentClassName = `modal-menu__nav${
    modalIsOpen ? " modal-menu__nav-opened" : ""
  }`;

  return (
    <div className={modalMenuClassName} onClick={modalCloseHandler}>
      <nav
        className={modalMenuContentClassName}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="modal-menu__wrapper">
          <span className="modal-menu__icon" />
          <li className="modal-menu__item">
            <NavLink
              className="modal-menu__nav-link"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#9f9e9c" : "white",
              })}
              onClick={modalCloseHandler}
            >
              главная
            </NavLink>
          </li>
          <li className="modal-menu__item">
            <NavLink
              className="modal-menu__nav-link"
              to="/affiche"
              style={({ isActive }) => ({
                color: isActive ? "#9f9e9c" : "white",
              })}
              onClick={modalCloseHandler}
            >
              афиша
            </NavLink>
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

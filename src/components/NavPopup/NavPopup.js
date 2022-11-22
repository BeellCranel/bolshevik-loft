import React from "react";
import { NavLink } from "react-router-dom";
import "./NavPopup.scss";

export const NavPopup = ({ modalIsOpen, modalCloseHandler, closeNavPopup }) => {
  const modalMenuClassName = `modal-menu${
    modalIsOpen ? " modal-menu__opened" : ""
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
              onClick={closeNavPopup}
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
              onClick={closeNavPopup}
            >
              афиша
            </NavLink>
          </li>
          <li className="modal-menu__item">
            <NavLink
              className="modal-menu__nav-link"
              to="/terms"
              style={({ isActive }) => ({
                color: isActive ? "#9f9e9c" : "white",
              })}
              onClick={closeNavPopup}
            >
              организация мероприятий
            </NavLink>
          </li>
          <li className="modal-menu__item">
            <NavLink
              className="modal-menu__nav-link"
              to="/characteristics"
              style={({ isActive }) => ({
                color: isActive ? "#9f9e9c" : "white",
              })}
              onClick={closeNavPopup}
            >
              характеристика пространства
            </NavLink>
          </li>
          <li className="modal-menu__item">
            <NavLink
              className="modal-menu__nav-link"
              to="/contacts"
              style={({ isActive }) => ({
                color: isActive ? "#9f9e9c" : "white",
              })}
              onClick={closeNavPopup}
            >
              контакты
            </NavLink>
          </li>
          <li className="modal-menu__item">
            <p className="modal-menu__text">парковка</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

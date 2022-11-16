import React from "react";
import "./Contacts.scss";

export const Contacts = () => {
  return (
    <nav className="contacts">
      <ul className="contacts__list">
        <li className="contacts__item">
          <a href="tel: +79773353435" className="contacts__link">
            <strong>
              +7 977 335-34-35
            </strong>
          </a>
        </li>
        <li className="contacts__item">
          <a href="mailto:info@bolshevikloft.ru" className="contacts__link contacts__link_type_email">
            <strong>info@bolshevikloft.ru</strong>
          </a>
        </li>
      </ul>
    </nav>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <h3 className="logo__text">
          Football<span className="blue">Tracker</span>
        </h3>
        <ul className="nav__menu">
          <li className="nav__item">
            <FontAwesomeIcon icon="house" />
            Főoldal
          </li>
          <li className="nav__item">
            <FontAwesomeIcon icon="fa-solid fa-note-sticky" />
            Edzéstervek
          </li>
          <li className="nav__item">
            <FontAwesomeIcon icon="fa-solid fa-brain" />
            Motiváció
          </li>
          <li className="nav__item">Regisztráció</li>
          <li className="nav__item"><a className="blue__bg">Bejelentkezés</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

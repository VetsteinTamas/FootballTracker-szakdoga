import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import DashboardHome from "../components/DashboardHome";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = localStorage.getItem("loggedInUser");

  return (
    <div className="container__dash">
      <div className="row dash__row">
        <div className="menu">
          <div className="menu__user">
            <img
              src="https://avatars.githubusercontent.com/u/4262050?v=4"
              alt=""
              className="menu__icon"
            />
            <p className="menu__para">Üdv újra,</p>
            <div className="menu__title">{user}</div>
          </div>
          <div className="menu__items">
            <ul className="menu__items--list">
              <li className="menu__item">
                <span className="blue">
                  <FontAwesomeIcon
                    icon="fa-solid fa-bars"
                    className="menu__fonticon"
                  />
                  <Link to="/dashboard" className="link">
                    Összegzés
                  </Link>
                </span>
              </li>
              <li className="menu__item">
                <FontAwesomeIcon
                  icon="fa-solid fa-person-running"
                  className="menu__fonticon"
                />
                <Link to="/dashboard/training" className="link">
                  Edzéstervek
                </Link>
              </li>
              <li className="menu__item">
                <FontAwesomeIcon
                  icon="fa-solid fa-utensils"
                  className="menu__fonticon"
                />
                <Link to="/dashboard/meal" className="link">
                  Étrend
                </Link>
              </li>
              <li className="menu__item">
                <FontAwesomeIcon
                  icon="fa-solid fa-clipboard"
                  className="menu__fonticon"
                />
                <Link to="/dashboard/todo" className="link">
                  TO-DO lista
                </Link>
              </li>
            </ul>
            <p className="menu__low">
              <FontAwesomeIcon
                icon="fa-solid fa-gear"
                className="menu__fonticon"
              />
              Beállítások
            </p>
          </div>
        </div>
        <DashboardHome />
      </div>
    </div>
  );
};

export default Dashboard;

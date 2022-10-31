import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Trainingplan = ({ trainings }) => {
  console.log(trainings);
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
                <FontAwesomeIcon
                  icon="fa-solid fa-bars"
                  className="menu__fonticon"
                />
                <Link to="/dashboard" className="link">
                  Összegzés
                </Link>
              </li>
              <li className="menu__item">
                <span className="blue">
                  <FontAwesomeIcon
                    icon="fa-solid fa-person-running"
                    className="menu__fonticon"
                  />
                  <Link to="/dashboard/training" className="link">
                    Edzéstervek
                  </Link>
                </span>
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
        <div className="statistics">
          <div className="plans__container">
            <select name="plan" id="plan">
              <option value="choose" disabled selected>
                Válassz edzésterv csoportok közül...
              </option>
            </select>
            <div className="plans">
              {trainings.map((training) => {
                return (
                  <div className="plan">
                    <div className="plan__title--container">
                      <FontAwesomeIcon
                        icon="fa-solid fa-circle"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">{training.name}</h3>
                    </div>
                    <div className="plan__description--container">
                      {/* TODO SPLICEOLNI SZÖVEGET */}
                      <p className="plan__description">
                        {training.description.slice(0, 60) + "..."}
                      </p>
                      <div className="plan__details">
                        <div className="plan__detail">
                          <FontAwesomeIcon
                            icon="fa-solid fa-angle-right"
                            className="plan__icon"
                          />
                          <h3 className="plan__title">{training.difficulty}</h3>
                        </div>
                        <div className="plan__detail">
                          <FontAwesomeIcon
                            icon="fa-solid fa-angle-right"
                            className="plan__icon"
                          />
                          <h3 className="plan__title">{training.location}</h3>
                        </div>
                        <div className="plan__detail">
                          <FontAwesomeIcon
                            icon="fa-solid fa-angle-right"
                            className="plan__icon"
                          />
                          <h3 className="plan__title">{training.position}</h3>
                        </div>
                        <div className="plan__detail">
                          <FontAwesomeIcon
                            icon="fa-solid fa-angle-right"
                            className="plan__icon"
                          />
                          <h3 className="plan__title">30 perc</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="plans__footer">
              <FontAwesomeIcon icon="fa-solid fa-backward" />
              <p>1. oldal</p>
              <FontAwesomeIcon icon="fa-solid fa-forward" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainingplan;

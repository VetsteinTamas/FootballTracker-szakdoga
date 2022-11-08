import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Trainingplan = ({ trainings }) => {
  const [startSlice, setStartSlice] = useState(0);
  const [endSlice, setEndSlice] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const user = localStorage.getItem("loggedInUser");

  const previousPage = () => {
    setStartSlice(startSlice - 6);
    setEndSlice(endSlice - 6);
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setStartSlice(startSlice + 6);
    setEndSlice(endSlice + 6);
    setCurrentPage(currentPage + 1);
  };

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
            <div className="plans">
              {trainings
                .map((training, index) => {
                  console.log(index);
                  return (
                    <div className="plan">
                      <Link
                        to={`/dashboard/training/${JSON.stringify(index)}`}
                        className="link"
                      >
                        <div className="plan__title--container">
                          <FontAwesomeIcon
                            icon="fa-solid fa-person-running"
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
                              <h3 className="plan__title">
                                {training.difficulty}
                              </h3>
                            </div>
                            <div className="plan__detail">
                              <FontAwesomeIcon
                                icon="fa-solid fa-angle-right"
                                className="plan__icon"
                              />
                              <h3 className="plan__title">
                                {training.location}
                              </h3>
                            </div>
                            <div className="plan__detail">
                              <FontAwesomeIcon
                                icon="fa-solid fa-angle-right"
                                className="plan__icon"
                              />
                              <h3 className="plan__title">
                                {training.position}
                              </h3>
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
                      </Link>
                    </div>
                  );
                })
                .slice(startSlice, endSlice)}
            </div>
            <div className="plans__footer">
              {currentPage > 1 ? (
                <FontAwesomeIcon
                  icon="fa-solid fa-backward"
                  onClick={previousPage}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon="fa-solid fa-backward"
                  style={{ opacity: "0" }}
                />
              )}
              <p>{currentPage}. oldal</p>
              {trainings.slice(startSlice + 6, endSlice + 6).length > 0 ? (
                <FontAwesomeIcon
                  icon="fa-solid fa-forward"
                  onClick={nextPage}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon="fa-solid fa-backward"
                  style={{ opacity: "0" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainingplan;

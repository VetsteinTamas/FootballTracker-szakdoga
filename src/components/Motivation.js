import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Motivation = () => {
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
                Összegzés
              </li>
              <li className="menu__item">
                <FontAwesomeIcon
                  icon="fa-solid fa-person-running"
                  className="menu__fonticon"
                />
                Edzéstervek
              </li>
              <li className="menu__item">
                <FontAwesomeIcon
                  icon="fa-solid fa-utensils"
                  className="menu__fonticon"
                />
                Étrend
              </li>
              <li className="menu__item">
                <FontAwesomeIcon
                  icon="fa-solid fa-brain"
                  className="menu__fonticon"
                />
                Motiváció
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
          <div className="motivation__container">
            <div className="motivation__title--container">
              <div className="motivation__title--left">
                <FontAwesomeIcon
                  icon="fa-solid fa-angle-right"
                  className="plan__icon"
                />
                <h2 className="motivation__title">Motivációs tartalmak</h2>
              </div>
              <div className="motivation__title--right">
                <h4 className="motivation__subtitle">
                  Legyél felkészülve minden kihívásra
                </h4>
              </div>
            </div>
            <div className="motivation__description--container">
              <div className="video__title--container">
                <div className="video__title--left">
                  <h3 className="video__title">Mai ajánlott tartalom</h3>
                </div>
                <div className="video__title--checkbox">
                  <input type="checkbox" name="done" id="done" />
                  <h2>Megtekintve</h2>
                </div>
              </div>
              <iframe
                width="650"
                height="350"
                src="https://www.youtube.com/embed/YTPIs3tErAI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="yt__video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivation;

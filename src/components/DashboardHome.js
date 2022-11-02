import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const DashboardHome = ({ todo }) => {
  return (
    <div className="statistics">
      <div className="summary">
        <div className="summary__icons">
          <div className="summary__icon">
            <div className="css-pie">
              <div></div>
              <div></div>
            </div>
            <div className="pie__number--container">
              <p className="pie__number pie__number1"></p>
            </div>
          </div>
          <div className="summary__icon">
            <div className="css-pie">
              <div></div>
              <div></div>
            </div>
            <div className="pie__number--container">
              <p className="pie__number pie__number2"></p>
            </div>
          </div>
          <div className="summary__icon">
            <div className="css-pie">
              <div></div>
              <div></div>
            </div>
            <div className="pie__number--container">
              <p className="pie__number pie__number3"></p>
            </div>
          </div>
          <div className="summary__icon">
            <div className="css-pie">
              <div></div>
              <div></div>
            </div>
            <div className="pie__number--container">
              <p className="pie__number pie__number5"></p>
            </div>
          </div>
        </div>
        <div className="summary__rating">
          <p className="rating">
            Értékelés:{" "}
            <FontAwesomeIcon
              icon="fa-solid fa-face-sad-tear"
              className="rating__icon"
            />
          </p>
        </div>
      </div>
      <div className="todo__and__next">
        <div className="todo">
          <div className="todo__list">
            <div className="todo__title--container">
              <p className="todo__title">TO-DO Lista</p>
              <Link to="/dashboard/todo">
                <FontAwesomeIcon
                  icon="fa-solid fa-right-to-bracket"
                  className="todo__icon navigate__icon"
                />
              </Link>
            </div>
            <ul className="todo__list--ul">
              {todo.slice(0, 3).map((element) => {
                let month = element.time.toDate().getUTCMonth() + 1; //months from 1-12
                let day = element.time.toDate().getUTCDate();
                let year = element.time.toDate().getUTCFullYear();
                let hour = element.time.toDate().getHours();
                let minutes = element.time.toDate().getMinutes();
                if (minutes == 0) {
                  minutes = `00`;
                } else if (minutes < 10) {
                  minutes = "0" + minutes.toString();
                }

                return (
                  <>
                    <div className="todo__item--header">
                      <span className="blue" style={{ fontWeight: 700 }}>
                        {element.type}
                      </span>
                      <span className="blue" style={{ fontWeight: 700 }}>
                        {year}/{month}/{day} {hour}:{minutes}
                      </span>
                    </div>
                    <li className="todo__item">{element.name.slice(0, 30)}</li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="next">
          <div className="next__nav">
            <FontAwesomeIcon
              icon="fa-solid fa-backward"
              className="navigate__icon"
            />
            <h3 className="next__title">Ajánlott edzésterv</h3>
            <FontAwesomeIcon
              icon="fa-solid fa-forward"
              className="navigate__icon"
            />
          </div>
          <div className="next__container">
            <div className="next__container--text">
              <div className="suggestion__title--container">
                <h3 className="suggestion__title">Futás megszakításokkal</h3>
                <h3 className="suggestion__title">30 perc</h3>
              </div>
              <div className="suggestion__description--container">
                A gyakorlat lényege, hogy hatszor 4+1 percet fuss. A 4 perc
                intenzív tempóban, az 1 perc viszont lassú levezető kocogással.
              </div>
              <ul className="suggestion__list">
                <li className="suggestion__item">
                  Nehézség: <span className="bold">Haladó</span>
                </li>
                <li className="suggestion__item">
                  Eszközök: <span className="bold">Nincs</span>
                </li>
                <li className="suggestion__item">
                  Helyszín: <span className="bold">Nincs megkötve</span>
                </li>
              </ul>
            </div>
            <div className="next__jump">
              <div className="suggestion__title--container suggestion__footer">
                <h3 className="suggestion__button">Ugrás a feladathoz</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DashboardHome = () => {
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
                  <p className="pie__number pie__number4"></p>
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
                  <FontAwesomeIcon
                    icon="fa-solid fa-right-to-bracket"
                    className="todo__icon navigate__icon"
                  />
                </div>
                <ul className="todo__list--ul">
                  <div className="todo__item--header">
                    <span className="blue" style={{ fontWeight: 700 }}>
                      1.
                    </span>
                    <span className="blue" style={{ fontWeight: 700 }}>
                      {" "}
                      2022/10/23
                    </span>
                  </div>
                  <li className="todo__item">
                    18:00 edzés Ásotthalmon, 5000 forint felszerelésre!
                  </li>
                  <div className="todo__item--header">
                    <span className="blue" style={{ fontWeight: 700 }}>
                      2.
                    </span>
                    <span className="blue" style={{ fontWeight: 700 }}>
                      {" "}
                      2022/11/05
                    </span>
                  </div>
                  <li className="todo__item">
                    18:00 edzés Ásotthalmon, 5000 forint felszerelésre!
                  </li>
                  <div className="todo__item--header">
                    <span className="blue" style={{ fontWeight: 700 }}>
                      3.
                    </span>
                    <span className="blue" style={{ fontWeight: 700 }}>
                      {" "}
                      2022/12/12
                    </span>
                  </div>
                  <li className="todo__item">
                    18:00 edzés Ásotthalmon, 5000 forint felszerelésre!
                  </li>
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
                    <h3 className="suggestion__title">
                      Futás megszakításokkal
                    </h3>
                    <h3 className="suggestion__title">30 perc</h3>
                  </div>
                  <div className="suggestion__description--container">
                    A gyakorlat lényege, hogy hatszor 4+1 percet fuss. A 4 perc
                    intenzív tempóban, az 1 perc viszont lassú levezető
                    kocogással.
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
  )
}

export default DashboardHome

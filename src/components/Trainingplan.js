import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Trainingplan = () => {
  const user = localStorage.getItem("loggedInUser");
  return (
        <div className="statistics">
          <div className="plans__container">
            <select name="plan" id="plan">
              <option value="choose" disabled selected>
                Válassz edzésterv csoportok közül...
              </option>
            </select>
            <div className="plans">
              <div className="plan">
                <div className="plan__title--container">
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle"
                    className="plan__icon"
                  />
                  <h3 className="plan__title">2/3 Sprint</h3>
                </div>
                <div className="plan__description--container">
                  {/* TODO SPLICEOLNI SZÖVEGET */}
                  <p className="plan__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    assumenda sit beatae placeat...
                  </p>
                  <div className="plan__details">
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Haladó</h3>
                    </div>
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Akárhol</h3>
                    </div>
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Minden pozíció</h3>
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
              <div className="plan">
                <div className="plan__title--container">
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle"
                    className="plan__icon"
                  />
                  <h3 className="plan__title">2/3 Sprint</h3>
                </div>
                <div className="plan__description--container">
                  {/* TODO SPLICEOLNI SZÖVEGET */}
                  <p className="plan__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    assumenda sit beatae placeat...
                  </p>
                  <div className="plan__details">
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Haladó</h3>
                    </div>
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Akárhol</h3>
                    </div>
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Minden pozíció</h3>
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
              <div className="plan">
                <div className="plan__title--container">
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle"
                    className="plan__icon"
                  />
                  <h3 className="plan__title">2/3 Sprint</h3>
                </div>
                <div className="plan__description--container">
                  {/* TODO SPLICEOLNI SZÖVEGET */}
                  <p className="plan__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    assumenda sit beatae placeat...
                  </p>
                  <div className="plan__details">
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Haladó</h3>
                    </div>
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Akárhol</h3>
                    </div>
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Minden pozíció</h3>
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
              <div className="plan">
                <div className="plan__title--container">
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle"
                    className="plan__icon"
                  />
                  <h3 className="plan__title">2/3 Sprint</h3>
                </div>
                <div className="plan__description--container">
                  {/* TODO SPLICEOLNI SZÖVEGET */}
                  <p className="plan__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    assumenda sit beatae placeat...
                  </p>
                  <div className="plan__details">
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Haladó</h3>
                    </div>
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Akárhol</h3>
                    </div>
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Minden pozíció</h3>
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
              <div className="plan">
                <div className="plan__title--container">
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle"
                    className="plan__icon"
                  />
                  <h3 className="plan__title">2/3 Sprint</h3>
                </div>
                <div className="plan__description--container">
                  {/* TODO SPLICEOLNI SZÖVEGET */}
                  <p className="plan__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    assumenda sit beatae placeat...
                  </p>
                  <div className="plan__details">
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Haladó</h3>
                    </div>
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Akárhol</h3>
                    </div>
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Minden pozíció</h3>
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
              <div className="plan">
                <div className="plan__title--container">
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle"
                    className="plan__icon"
                  />
                  <h3 className="plan__title">2/3 Sprint</h3>
                </div>
                <div className="plan__description--container">
                  {/* TODO SPLICEOLNI SZÖVEGET */}
                  <p className="plan__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    assumenda sit beatae placeat...
                  </p>
                  <div className="plan__details">
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Haladó</h3>
                    </div>
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Akárhol</h3>
                    </div>
                    <div className="plan__detail">
                      <FontAwesomeIcon
                        icon="fa-solid fa-angle-right"
                        className="plan__icon"
                      />
                      <h3 className="plan__title">Minden pozíció</h3>
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
            </div>
            <div className="plans__footer">
              <FontAwesomeIcon icon="fa-solid fa-backward" />
              <p>1. oldal</p>
              <FontAwesomeIcon icon="fa-solid fa-forward" />
            </div>
          </div>
        </div>
  );
};

export default Trainingplan;

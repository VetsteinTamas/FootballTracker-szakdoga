import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";

const Meal = ({ meals }) => {
  console.log(meals);
  const user = localStorage.getItem("loggedInUser");
  const [name, setName] = useState("");
  const [calorie, setCalorie] = useState("");
  const [protein, setProtein] = useState("");

  const mealCollectionRef = collection(db, "meals");
  const submitItem = async (e) => {
    e.preventDefault();
    await addDoc(mealCollectionRef, {
      name: name,
      calorie: calorie,
      protein: protein,
    });
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
                <FontAwesomeIcon
                  icon="fa-solid fa-person-running"
                  className="menu__fonticon"
                />
                <Link to="/dashboard/training" className="link">
                  Edzéstervek
                </Link>
              </li>
              <li className="menu__item">
                <span className="blue">
                  <FontAwesomeIcon
                    icon="fa-solid fa-utensils"
                    className="menu__fonticon"
                  />
                  <Link to="/dashboard/meal" className="link">
                    Étrend
                  </Link>
                </span>
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
        {/* <Switch>
          <Route path="/dashboard/training">
            <Trainingplan />
          </Route>
        </Switch> */}
        <div className="statistics">
          <div className="training__plan--container">
            <div className="meal__title--container">
              <h1 className="meal__title">
                <FontAwesomeIcon
                  icon="fa-solid fa-utensils"
                  className="meal__icon"
                />
                Mit ettél ma?
              </h1>
            </div>
            <div className="meal__main--container">
              <div className="meal__add">
                <form className="meal__form">
                  <h2 className="meal__subtitle">Hozzáadás</h2>
                  <label htmlFor="name">Étel neve</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="meal__input"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="calorie">Kalória</label>
                  <input
                    type="text"
                    name="calorie"
                    id="calorie"
                    className="meal__input"
                    onChange={(e) => setCalorie(e.target.value)}
                  />
                  <label htmlFor="protein">Fehérje</label>
                  <input
                    type="text"
                    name="protein"
                    id="protein"
                    className="meal__input"
                    onChange={(e) => setProtein(e.target.value)}
                  />
                  <button className="meal__btn" onClick={submitItem}>
                    Küldés
                  </button>
                </form>
              </div>
              <div className="meal__add meal__list">
                <h2 className="meal__subtitle">Lista</h2>
                {meals.map((meal) => {
                  return (
                    <div className="meal">
                      <h3 className="meal__name">{meal.name}</h3>
                      <div className="meal__data">
                        <h5 className="meal__calorie">
                          Kalória: {meal.calorie}
                        </h5>
                        <h5 className="meal__protein">
                          Fehérje: {meal.protein}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="meal__add meal__list">
                <h2 className="meal__subtitle">Összegzés</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;

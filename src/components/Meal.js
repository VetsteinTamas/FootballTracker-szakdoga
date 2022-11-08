import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";

const Meal = ({ meals, allCalorie, allProtein, todayGoal, matchingUser }) => {
  const user = localStorage.getItem("loggedInUser");
  const [name, setName] = useState("");
  const [calorie, setCalorie] = useState("");
  const [protein, setProtein] = useState("");

  const deleteMeal = async (index) => {
    const mealDoc = doc(db, "meals", index);
    await deleteDoc(mealDoc);
  };

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
            <div className="menu__title">{matchingUser[0].name}</div>
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
                    Étrend összegző
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
                Étel bevitel összegző
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
                    type="number"
                    name="calorie"
                    id="calorie"
                    className="meal__input"
                    onChange={(e) => setCalorie(e.target.value)}
                  />
                  <label htmlFor="protein">Fehérje</label>
                  <input
                    type="number"
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
                <div className="all__meal">
                  {meals.map((meal) => {
                    return (
                      <div className="meal">
                        <div className="meal__cancel">
                          <FontAwesomeIcon
                            icon="fa-solid fa-xmark"
                            className="meal__icon"
                            onClick={() => {
                              deleteMeal(meal.id);
                            }}
                          />
                        </div>
                        <h3 className="meal__name">{meal.name}</h3>
                        <div className="meal__data">
                          <h5 className="meal__calorie">
                            Kalória: {meal.calorie}{" "}
                            <FontAwesomeIcon icon="fa-solid fa-fire" />
                          </h5>
                          <h5 className="meal__protein">
                            Fehérje: {meal.protein}{" "}
                            <FontAwesomeIcon icon="fa-solid fa-dna" />
                          </h5>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="meal__add meal__list">
                <h2 className="meal__subtitle">Összegzés</h2>
                <div className="meal__statistics">
                  <h3 className="statistic__subtitle">
                    Elfogyasztott kalóríák
                  </h3>
                  <p
                    className="statistic__number"
                    style={
                      allCalorie > 2000 ? { color: "red" } : { color: "white" }
                    }
                  >
                    {allCalorie} / 2000
                  </p>
                  <h3 className="statistic__subtitle">
                    Elfogyasztott fehérjék
                  </h3>
                  <p
                    className="statistic__number"
                    style={
                      allProtein > 70 ? { color: "red" } : { color: "white" }
                    }
                  >
                    {allProtein} / 70
                  </p>
                  <h3 className="statistic__subtitle">Mai összegzés</h3>
                  <p className="statistic__number">
                    {(todayGoal * 100).toFixed(2)} %
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;

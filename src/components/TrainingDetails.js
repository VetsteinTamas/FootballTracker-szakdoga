import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";

const TrainingDetails = ({ trainings, matchingUser }) => {
  const user = localStorage.getItem("loggedInUser");
  const { id } = useParams();
  const doneBy = trainings[id].doneBy;

  const [isDoneBy, setIsDoneBy] = useState(doneBy);
  console.log(isDoneBy);
  const trainingDoc = doc(db, "trainings", trainings[id].id);
  const handleDone = async () => {
    console.log(isDoneBy);
    if (doneBy.includes(user)) {
      let index = doneBy.indexOf(user);
      doneBy.splice(index, 1);
    } else {
      setIsDoneBy(doneBy.push(user));
    }
    await updateDoc(trainingDoc, {
      doneBy: doneBy,
    });
    console.log(doneBy);
  };
  console.log(doneBy);

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
                  Étrend összegző
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
        {/* <Switch>
          <Route path="/dashboard/training">
            <Trainingplan />
          </Route>
        </Switch> */}
        <div className="statistics">
          <div className="training__plan--container">
            <div className="training__plan-title--container">
              <div className="training__plan--left">
                <FontAwesomeIcon
                  icon="fa-solid fa-angle-right"
                  className="plan__icon"
                />
                <h1 className="training__plan--title">{trainings[id].name}</h1>
              </div>
              <div className="training__plan--right">
                <input
                  type="checkbox"
                  name="done"
                  id="done"
                  onChange={handleDone}
                  checked={doneBy.includes(user) ? true : false}
                />
                <h1 className="training__plan--title">Megjelölve mint kész</h1>
              </div>
            </div>
            <div className="training__plan-description--container">
              <div className="training__plan-description--text">
                {trainings[id].description}
                <div className="training__plan-description--stats">
                  <div className="stat">
                    <FontAwesomeIcon
                      icon="fa-solid fa-fire"
                      className="stat__icon"
                    />
                    {trainings[id].calorie}kalória
                  </div>
                  <div className="stat">
                    <FontAwesomeIcon
                      icon="fa-solid fa-person-running"
                      className="stat__icon"
                    />
                    Futás
                  </div>
                </div>
              </div>
              <div className="training__plan-description--icons">
                <div className="training__plan--icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-clock"
                    className="plan__icon"
                  />
                  <p className="icon__title">{trainings[id].duration} perc</p>
                </div>
                <div className="training__plan--icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-location-dot"
                    className="plan__icon"
                  />
                  <p className="icon__title">{trainings[id].location}</p>
                </div>
                <div className="training__plan--icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-crosshairs"
                    className="plan__icon"
                  />
                  <p className="icon__title">{trainings[id].position}</p>
                </div>
                <div className="training__plan--icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-square-poll-vertical"
                    className="plan__icon"
                  />
                  <p className="icon__title">{trainings[id].difficulty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetails;

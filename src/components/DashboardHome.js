import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardHome = ({ todo, trainings, todayGoal }) => {
  const user = localStorage.getItem("loggedInUser");
  
  const trainingArrayUndone = trainings.filter(
    (training) => !training.doneBy.includes(user)
  );

  let randomUndoneTraining =
    trainingArrayUndone[Math.floor(Math.random() * trainingArrayUndone.length)];

  const trainingArray = trainings.filter((training) =>
    training.doneBy.includes(user)
  );

  let calorieBurnt = 0;
  trainingArray.map((training) => {
    calorieBurnt += Number(training.calorie);
  });

  const trainingPercentage = (
    (trainingArray.length / trainings.length) *
    100
  ).toFixed(0);

  const todayGoalFixed = (todayGoal * 100).toFixed(0);

  let todoPercentage = 0;
  todo.length === 0 ? (todoPercentage = 100) : (todoPercentage = 0);
  
  const value =
    (Number(todayGoalFixed) +
      Number(trainingPercentage) +
      todoPercentage +
      Number(todayGoalFixed)) /
    4;
  return (
    <div className="statistics">
      <div className="summary">
        <div className="summary__icons">
          <div className="summary__icon">
            <CircularProgressbar
              value={trainingPercentage}
              text={`${trainingPercentage}%`}
              styles={{
                path: {
                  stroke: "rgb(51, 51, 151)",
                },
                trail: {
                  stroke: "white",
                },
                text: {
                  // Text color
                  fill: "rgb(51, 51, 151)",
                },
              }}
              className="progress"
            />
            <p className="summary__icon--title">Edzés teljesítve</p>
          </div>
          <div className="summary__icon">
            <CircularProgressbar
              value={todayGoalFixed}
              text={`${todayGoalFixed}%`}
              className="progress"
              styles={{
                path: {
                  stroke: "rgb(51, 51, 151)",
                },
                trail: {
                  stroke: "white",
                },
                text: {
                  // Text color
                  fill: "rgb(51, 51, 151)",
                },
              }}
            />
            <p className="summary__icon--title">Kalória és fehérje cél</p>
          </div>
          <div className="summary__icon">
            <CircularProgressbar
              className="progress"
              value={todoPercentage}
              text={`${todoPercentage}%`}
              styles={{
                path: {
                  stroke: "rgb(51, 51, 151)",
                },
                trail: {
                  stroke: "white",
                },
                text: {
                  // Text color
                  fill: "rgb(51, 51, 151)",
                },
              }}
            />
            <p className="summary__icon--title">TO-DO teljesítve</p>
          </div>
          <div className="summary__icon--calorie">
            <p className="calorie__burnt blue">{calorieBurnt}</p>
            <p className="summary__icon--title">Kalória elégetve</p>
          </div>
        </div>
        <div className="summary__rating">
          <p className="rating">
            Értékelés:{" "}
            {value < 50 ? (
              <FontAwesomeIcon
                icon="fa-solid fa-face-sad-tear"
                className="rating__icon"
              />
            ) : value >= 50 && value < 70 ? (
              <FontAwesomeIcon
                icon="fa-solid fa-face-grin-beam-sweat"
                className="rating__icon"
              />
            ) : value >= 70 ? (
              <FontAwesomeIcon
                icon="fa-solid fa-face-laugh-wink"
                className="rating__icon"
              />
            ) : (
              "error"
            )}
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
            {todo.length !== 0 ? (
              <ul className="todo__list--ul">
                {todo.slice(0, 3).map((element) => {
                  let month = element.time.toDate().getUTCMonth() + 1; //months from 1-12
                  let day = element.time.toDate().getUTCDate();
                  let year = element.time.toDate().getUTCFullYear();
                  let hour = element.time.toDate().getHours();
                  let minutes = element.time.toDate().getMinutes();
                  if (minutes === 0) {
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
                      <li className="todo__item">
                        {element.name.slice(0, 30)}
                      </li>
                    </>
                  );
                })}
              </ul>
            ) : (
              <div className="empty" style={{ height: "100%" }}>
                Jelenleg nincs tennivalód.
              </div>
            )}
          </div>
        </div>
        <div className="next">
          <div className="next__nav">
            <h3 className="next__title">Ajánlott edzésterv</h3>
          </div>
          {trainingArrayUndone.length > 0 ? (
            <div className="next__container">
              <div className="next__container--text">
                <div className="suggestion__title--container">
                  <h3 className="suggestion__title">
                    {randomUndoneTraining.name}
                  </h3>
                  <h3 className="suggestion__title">
                    {randomUndoneTraining.duration} perc
                  </h3>
                </div>
                <div className="suggestion__description--container">
                  {randomUndoneTraining.description}
                </div>
                <ul className="suggestion__list">
                  <li className="suggestion__item">
                    Nehézség:{" "}
                    <span className="bold">
                      {randomUndoneTraining.difficulty}
                    </span>
                  </li>
                  <li className="suggestion__item">
                    Játékosok száma:{" "}
                    <span className="bold">
                      {randomUndoneTraining.position}
                    </span>
                  </li>
                  <li className="suggestion__item">
                    Helyszín:{" "}
                    <span className="bold">
                      {randomUndoneTraining.location}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="next__jump">
                <div className="suggestion__title--container suggestion__footer">
                  <Link
                    className="link"
                    to={`/dashboard/training/${JSON.stringify(
                      Number(randomUndoneTraining.id)
                    )}`}
                  >
                    <h3 className="suggestion__button">Ugrás a feladathoz</h3>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty" style={{ height: "100%" }}>
              Minden edzést elvégeztél{" "}
              <FontAwesomeIcon
                icon="fa-solid fa-hand-fist"
                style={{ fontSize: "24px", marginLeft: "6px" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

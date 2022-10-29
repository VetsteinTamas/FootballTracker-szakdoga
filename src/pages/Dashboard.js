import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import DashboardHome from "../components/DashboardHome";

const Dashboard = () => {
  const user = localStorage.getItem("loggedInUser");

  const [trainings, setTrainings] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "trainings")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTrainings(newData);
      console.log(trainings, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

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
        {/* <Switch>
          <Route path="/dashboard/training">
            <Trainingplan />
          </Route>
        </Switch> */}
        <DashboardHome />
      </div>
    </div>
  );
};

export default Dashboard;

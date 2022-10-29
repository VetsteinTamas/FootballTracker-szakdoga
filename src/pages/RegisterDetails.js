import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const RegisterDetails = () => {
  const history = useHistory();
  const [time, setTime] = useState("");
  const [position, setPosition] = useState("");
  const [weight, setWeight] = useState("");

  const saveDetails = () => {
    localStorage.setItem("time", time);
    localStorage.setItem("position", position);
    localStorage.setItem("weight", weight);
    history.push("/registerinfo");
  };

  console.log(time, position, weight);

  return (
    <div className="container container__register">
      <div className="row row__register">
        <div className="register__form--container">
          <div className="register__form">
            <label htmlFor="when" className="detail__label">
              Mikor kezdted el a labdarúgást?
            </label>
            <select
              name="when"
              id="when"
              onChange={(e) => setTime(e.target.value)}
            >
              <option disabled selected value>
                {" "}
                Válassz{" "}
              </option>
              <option value="lastyeare">Az elmúlt 1 évben</option>
              <option value="1-2years">1-2 éve</option>
              <option value="3-5years">3-5 éve</option>
              <option value="more5">Több mint 5 éve</option>
              <option value="start">Most kezdeném el</option>
            </select>
            <label htmlFor="when" className="detail__label">
              Milyen pozíción játszol/játszanál?
            </label>
            <select
              name="when"
              id="when"
              onChange={(e) => setPosition(e.target.value)}
            >
              <option disabled selected value>
                Válassz
              </option>
              <option value="attack">Támadó</option>
              <option value="midfield">Középpályás</option>
              <option value="defender">Védő</option>
              <option value="keeper">Kapus</option>
              <option value="decide">Még nem döntöttem el</option>
            </select>
            <label htmlFor="when" className="detail__label">
              Megvagy elégedve a súlyoddal?
            </label>
            <select
              name="when"
              id="when"
              onChange={(e) => setWeight(e.target.value)}
            >
              <option disabled selected value>
                Válassz
              </option>
              <option value="yes">Igen</option>
              <option value="no">Nem</option>
            </select>
            {time !== "" && weight !== "" && position !== "" ? (
              <button onClick={saveDetails} className="btn__register">
                Folytatás
              </button>
            ) : (
              <button
                disabled
                onClick={saveDetails}
                style={{ cursor: "not-allowed" }}
                className="btn__register"
              >
                Folytatás
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterDetails;

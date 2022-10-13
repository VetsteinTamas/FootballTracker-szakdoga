import React from "react";

const RegisterDetails = () => {
  return (
    <div className="container container__register">
      <div className="row row__register">
        <div className="register__form--container">
          <form action="" className="register__form">
            <label htmlFor="when" className="detail__label">
              Mikor kezdted el a labdarúgást?
            </label>
            <select name="when" id="when">
              <option value="1">Az elmúlt 1 évben</option>
              <option value="2">1-2 éve</option>
              <option value="3">3-5 éve</option>
              <option value="4">Több mint 5 éve</option>
              <option value="5">Most kezdeném el</option>
            </select>
            <label htmlFor="when" className="detail__label">
              Milyen pozíción játszol/játszanál?
            </label>
            <select name="when" id="when">
              <option value="1">Támadó</option>
              <option value="2">Középpályás</option>
              <option value="3">Védő</option>
              <option value="4">Kapus</option>
              <option value="5">Még nem döntöttem el</option>
            </select>
            <label htmlFor="when" className="detail__label">
              Megvagy elégedve a súlyoddal?
            </label>
            <select name="when" id="when">
              <option value="1">Igen</option>
              <option value="2">Nem</option>
            </select>
            <button className="btn__register">Folytatás</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterDetails;

import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container container__register">
      <div className="row row__register">
        <div className="register__form--container">
          <form action="" className="register__form">
            <h1 className="register__title">
              Üdvözöllek. Csak néhány gyors kérdés, hogy személyre szabhassuk a
              FootballTrackert neked.
            </h1>
            <Link to="/registerdetails">
              <button className="btn__register">Folytatás</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

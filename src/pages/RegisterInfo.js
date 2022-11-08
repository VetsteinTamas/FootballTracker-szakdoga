import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import app from "../firebase";
import UserinfoDataService from "../services/users.services.js";

const RegisterInfo = () => {
  const history = useHistory();
  const auth = getAuth(app);

  /* LOCALSTORAGE */
  let weight = localStorage.getItem("weight");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const newUserinfo = {
    name,
  };

  console.log(newUserinfo);
  console.log(UserinfoDataService);

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("loggedInUser", email);
        history.push("/login");
      })
      .catch((error) => {
        /* const errorCode = error.code; */
        // ..
      });
    UserinfoDataService.setUserinfo(email, newUserinfo);
  };

  return (
    <div className="container container__register">
      <div className="row row__register">
        <div className="register__form--container">
          <div action="" className="register__form--left">
            <div className="quick__register">
              <p className="quick__title">Bejelentkezés gyorsan</p>
              <div className="quick__icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="quick__icon"
                  viewBox="0 0 488 512"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="quick__icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="register__form--right">
            <p className="quick__title">Regisztráció</p>
            <input
              type="text"
              placeholder="Email"
              className="registration__input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Név"
              className="registration__input"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Jelszó"
              className="registration__input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signUp} className="registration__button">
              Regisztáció
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterInfo;

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import app from "../firebase";
import UserinfoDataService from "../services/users.services.js";

const RegisterInfo = () => {
  const history = useHistory();
  const auth = getAuth(app);

  /* LOCALSTORAGE */

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

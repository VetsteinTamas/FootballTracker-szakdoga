import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useHistory } from "react-router-dom";
import UserinfoDataService from "../services/users.services.js";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.js";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("loggedInUser", email);
        history.push("/dashboard");
        window.location.reload(false);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const newUserinfo = {
    name,
  };

  const signInGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("loggedInUser", re.user.email);
        setName(re.user.displayName);
        setEmail(re.user.email);
        console.log(name, email);
        window.location.reload(false);
        UserinfoDataService.setUserinfo(email, newUserinfo);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container container__login">
      <div className="row row__login">
        <div className="login__container">
          <div className="login__form--container">
            <div className="login__form">
              <h3 className="form__title">Bejelentkezés</h3>
              <input
                type="text"
                id="username"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Felhasználónév"
              />
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Jelszó"
              />
              <input
                type="button"
                onClick={signIn}
                value="Bejelentkezés"
                id="btn"
              />
            </div>
            <div className="google__form" onClick={signInGoogle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="quick__icon"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
              <p className="google__form--title">
                Bejelentkezés Google fiókkal
              </p>
            </div>
          </div>
          <div className="login__image">
            <img
              src="https://media.istockphoto.com/photos/soccer-player-holding-soccer-ball-picture-id938418178?k=20&m=938418178&s=612x612&w=0&h=49UG--nAPxSyvNvezgGJAK3rebUqe9b1bU7QegxrFVk="
              alt=""
              className="login__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

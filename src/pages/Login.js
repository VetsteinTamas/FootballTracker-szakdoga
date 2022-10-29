import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("loggedInUser", email);
        history.push("/dashboard");
        window.location.reload(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="checkbox__input"
                  name="remember"
                  id="remember"
                />
                <label htmlFor="remember">Emlékezz rám</label>
              </div>
              <input
                type="button"
                onClick={signIn}
                value="Bejelentkezés"
                id="btn"
              />
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

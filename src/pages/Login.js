import React from "react";

const Login = () => {
  return (
    <div className="container container__login">
      <div className="row row__login">
        <div className="login__container">
          <div className="login__form--container">
            <form className="login__form">
              <h3 className="form__title">Bejelentkezés</h3>
              <input type="text" id="username" placeholder="Felhasználónév" />
              <input type="password" id="password" placeholder="Jelszó" />
              <div className="checkbox">
                <input type="checkbox" className="checkbox__input" name="remember" id="remember" />
                <label htmlFor="remember">Emlékezz rám</label>
              </div>
              <input type="button" value="Bejelentkezés" id="btn" />
            </form>
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

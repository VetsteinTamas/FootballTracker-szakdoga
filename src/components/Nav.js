import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory();
  const loggedIn = localStorage.getItem("loggedIn");
  const user = localStorage.getItem("loggedInUser");

  const logout = () => {
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("loggedInUser");
    window.location.reload(false);
    history.push("/");
  };

  console.log(loggedIn, typeof loggedIn);

  return (
    <nav>
      <div className="nav__container">
        <h3 className="logo__text">
          Football<span className="blue">Tracker</span>
        </h3>
        <ul className="nav__menu">
          <li className="nav__item">
            <FontAwesomeIcon icon="house" />
            <Link style={{ textDecoration: "none", color: "black" }} to="">
              Főoldal
            </Link>
          </li>
          <li className="nav__item">
            <FontAwesomeIcon icon="fa-solid fa-note-sticky" />
            Edzéstervek
          </li>
          <li className="nav__item">
            <FontAwesomeIcon icon="fa-solid fa-brain" />
            Motiváció
          </li>
          {loggedIn === "false" ? (
            <>
              <li className="nav__item">
                <Link to="/register" className="nav__item">
                  Regisztráció
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/login" className="blue__bg">
                  Bejelentkezés
                </Link>
              </li>
            </>
          ) : (
            <li className="nav__item">
              <Link to="/dashboard" className="blue__bg">
                {user}
              </Link>
              <FontAwesomeIcon
                onClick={logout}
                icon="fa-solid fa-arrow-right-from-bracket"
                className="navigate__icon"
              />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

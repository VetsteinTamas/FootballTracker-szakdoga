import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const TrainingDetails = () => {
  const user = localStorage.getItem("loggedInUser");

  

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
                <Link to="/dashboard" className="link">
                  Összegzés
                </Link>
              </li>
              <li className="menu__item">
                <span className="blue">
                  <FontAwesomeIcon
                    icon="fa-solid fa-person-running"
                    className="menu__fonticon"
                  />
                  <Link to="/dashboard/training" className="link">
                    Edzéstervek
                  </Link>
                </span>
              </li>
              <li className="menu__item">
                <FontAwesomeIcon
                  icon="fa-solid fa-utensils"
                  className="menu__fonticon"
                />
                <Link to="/dashboard/meal" className="link">
                  Étrend
                </Link>
              </li>
              <li className="menu__item">
              <FontAwesomeIcon
                  icon="fa-solid fa-clipboard"
                  className="menu__fonticon"
                />
                <Link to="/dashboard/todo" className="link">
                  TO-DO lista
                </Link>
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
        <div className="statistics">
          <div className="training__plan--container">
            <div className="training__plan-title--container">
              <div className="training__plan--left">
                <FontAwesomeIcon
                  icon="fa-solid fa-angle-right"
                  className="plan__icon"
                />
                <h1 className="training__plan--title">2/3 Sprint</h1>
              </div>
              <div className="training__plan--right">
                <input type="checkbox" name="done" id="done" />
                <h1 className="training__plan--title">Megjelölve mint kész</h1>
              </div>
            </div>
            <div className="training__plan-description--container">
              <div className="training__plan-description--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis magni labore eaque laudantium quidem nobis! Qui
                velit culpa, sint minus ratione, minima atque quis alias
                deserunt odit numquam, veritatis inventore. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Commodi sunt deserunt et
                earum. Temporibus, recusandae! Voluptas laboriosam sunt velit?
                Iste alias aperiam explicabo et incidunt, error doloribus
                expedita ratione natus!
                <div className="training__plan-description--stats">
                  <div className="stat">
                    <FontAwesomeIcon
                      icon="fa-solid fa-fire"
                      className="stat__icon"
                    />
                    625 kalória
                  </div>
                  <div className="stat">
                    <FontAwesomeIcon
                      icon="fa-solid fa-person-running"
                      className="stat__icon"
                    />
                    Futás
                  </div>
                </div>
              </div>
              <div className="training__plan-description--icons">
                <div className="training__plan--icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-clock"
                    className="plan__icon"
                  />
                  <p className="icon__title">30 perc</p>
                </div>
                <div className="training__plan--icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-location-dot"
                    className="plan__icon"
                  />
                  <p className="icon__title">Egyenes talaj</p>
                </div>
                <div className="training__plan--icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-crosshairs"
                    className="plan__icon"
                  />
                  <p className="icon__title">Szélső</p>
                </div>
                <div className="training__plan--icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-square-poll-vertical"
                    className="plan__icon"
                  />
                  <p className="icon__title">Haladó</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetails;

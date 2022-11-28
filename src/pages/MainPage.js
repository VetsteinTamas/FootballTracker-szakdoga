import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const MainPage = () => {
  const loggedIn = localStorage.getItem("loggedIn");
  console.log(loggedIn);
  return (
    <>
      <section className="landing">
        <div className="container">
          <div className="row">
            <div className="area">
              <div className="area__left">
                <h1 className="area__title">
                  A focista karriered{" "}
                  <span className="blue">itt kezdődik!</span>
                </h1>
                <p className="area__description">
                  Vedd kezedbe a céljaid irányítását. Kövess nyomon
                  edzésterveket, motivációs tartalmakat és étrendeket.
                </p>
                {loggedIn === "true" ? (
                  <button className="btn">
                    <Link to="/dashboard" className="link__fixer">
                      Ugrás a kezelőfelületre!
                    </Link>
                  </button>
                ) : (
                  <>
                    <button className="btn">
                      <Link to="/register" className="link__fixer">
                        Kezd el még ma ingyen!
                      </Link>
                    </button>
                    <p className="area__description">
                      <Link to="/login" className="link__fixer">
                        Van már profilod?{" "}
                        <span className="blue">Jelentkezz be!</span>
                      </Link>
                    </p>
                  </>
                )}
              </div>
              <div className="area__right">
                <img
                  src="https://www.footyrenders.com/render/kylian-mbappe-52.png"
                  alt="ronaldo"
                  className="area__img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <a href="#features" className="scroll">
        <div className="scroll__icon click"></div>
      </a>
      <section className="features" id="features">
        <div className="container">
          <div className="row row__column">
            <h3 className="blue feature__minititle">Jellemzők</h3>
            <h1 className="feature__title">
              Minden, ami egy focistának{" "}
              <span className="blue">szükséges.</span>
            </h1>
            <p className="feature__description">
              Akár kezdő vagy, akár haladó, itt megtalálsz mindent ami a
              fejlődésedet segíti. A rengeteg edzésterv, a kalória számláló és teendő követő rendszer kiváló lehetőség a
              képességek fejlesztésére és a formában maradásra.
            </p>
            <div className="features__table">
              <div className="feature">
                <FontAwesomeIcon icon="fa-solid fa-futbol" className="icon" />
                <div className="feature__text">
                  <h2 className="features__title">Edzésterv</h2>
                  <h4 className="features__para">
                    Kezdő, amatőr és haladó gyakorlatok nyújtanak
                    kiegyensúlyozott edzést.
                  </h4>
                </div>
              </div>
              
              <div className="feature">
                <FontAwesomeIcon icon="fa-solid fa-utensils" className="icon" />
                <div className="feature__text">
                  <h2 className="features__title">Kalória számláló</h2>
                  <h4 className="features__para">
                    A megfelelő kalória és fehérje bevitel nélkülözhetetlen az energia fenntartásához.
                  </h4>
                </div>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon="fa-solid fa-percent" className="icon" />
                <div className="feature__text">
                  <h2 className="features__title">Értékelés</h2>
                  <h4 className="features__para">
                    Értékelők segítenek abban, hogy mindig a
                    helyes úton maradj.
                  </h4>
                </div>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon="fa-solid fa-list" className="icon" />
                <div className="feature__text">
                  <h2 className="features__title">TO DO lista</h2>
                  <h4 className="features__para">
                    Egyszerűsítsd a mindennapjaid és a céljaid elérését a to do
                    listával, ahova minden tennivalót beírhatsz és követhetsz.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="steps">
        <div className="container">
          <div className="row">
            <div className="steps__img--container">
              <img
                src="https://officialpsds.com/imageview/rp/6v/rp6vkq_large.png?1521316471"
                alt=""
                className="area__img step__img"
              />
            </div>
            <div className="steps__textarea">
              <h3 className="steps__smalltitle blue">Lépések</h3>
              <h1 className="steps__title">
                Könnyű <span className="blue">belekezdeni.</span>
              </h1>
              <div className="step">
                <span className="number">01</span>
                <div className="feature__text">
                  <h2 className="features__title">Regisztráció</h2>
                  <h4 className="features__para">
                    Hozz létre profilt akár Google segítségével.
                  </h4>
                </div>
              </div>
              <div className="step">
                <span className="number">02</span>
                <div className="feature__text">
                  <h2 className="features__title">Egyéni információk</h2>
                  <h4 className="features__para">
                    Adj meg magadról pár infót, amely segítségével hozzád
                    szabhatjuk a terveket.
                  </h4>
                </div>
              </div>
              <div className="step">
                <span className="number">03</span>
                <div className="feature__text">
                  <h2 className="features__title">Mehet az edzés</h2>
                  <h4 className="features__para">
                    Kövesd edzésterveid, és érd el a céljaid.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MainPage;

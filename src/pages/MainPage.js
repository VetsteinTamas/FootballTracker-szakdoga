import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MainPage = () => {
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
                <button className="btn">Kezd el még ma ingyen!</button>
                <p className="area__description">
                  Van már profilod? <span className="blue">Jelentkezz be!</span>
                </p>
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
      <section className="features">
        <div className="container">
          <div className="row row__column">
            <h3 className="blue feature__minititle">Jellemzők</h3>
            <h1 className="feature__title">
              Minden, ami egy focistának{" "}
              <span className="blue">szükséges.</span>
            </h1>
            <p className="feature__description">
              Akár kezdő vagy, akár haladó, itt megtalálsz mindent ami a
              fejlődésedet segíti. A több száz edzésterv, étrend és motivációs
              videó és az egyénekre osztott edzésprogram kiváló lehetőség a
              képességek fejlesztésére.
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
                <FontAwesomeIcon icon="fa-solid fa-brain" className="icon" />
                <div className="feature__text">
                  <h2 className="features__title">Motiváció</h2>
                  <h4 className="features__para">
                    Minden az agyban dől el. Fejleszd a gondolkodásmódodat
                    naponta frissülő motivációs tartalmunkkal.
                  </h4>
                </div>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon="fa-solid fa-utensils" className="icon" />
                <div className="feature__text">
                  <h2 className="features__title">Étrend</h2>
                  <h4 className="features__para">
                    A megfelelő étrend az egyik legfontosabb tényező a sikerhez.
                    Itt több száz recept közül választhatsz.
                  </h4>
                </div>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon="fa-solid fa-user-pen" className="icon" />
                <div className="feature__text">
                  <h2 className="features__title">Személyreszabás</h2>
                  <h4 className="features__para">
                    Alkalmazásunk fő képessége, hogy mindent magadhoz szabhatsz.
                    Jól olvastad, mindent.
                  </h4>
                </div>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon="fa-solid fa-percent" className="icon" />
                <div className="feature__text">
                  <h2 className="features__title">Értékelés</h2>
                  <h4 className="features__para">
                    Napi, heti és havi értékelők segítenek abban, hogy mindig a
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
    </>
  );
};

export default MainPage;

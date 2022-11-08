import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import Modal from "./Modal";

const ToDo = ({ todo }) => {
  console.log(todo);
  const user = localStorage.getItem("loggedInUser");

  const [isOpen, setIsOpen] = useState(false);

  const deleteTodo = async (index) => {
    const todoDoc = doc(db, "todo", index);
    await deleteDoc(todoDoc);
  };

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
                <FontAwesomeIcon
                  icon="fa-solid fa-person-running"
                  className="menu__fonticon"
                />
                <Link to="/dashboard/training" className="link">
                  Edzéstervek
                </Link>
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
                <span className="blue">
                  <FontAwesomeIcon
                    icon="fa-solid fa-clipboard"
                    className="menu__fonticon"
                  />
                  <Link to="/dashboard/todo" className="link">
                    TO-DO lista
                  </Link>
                </span>
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
        <div className="statistics">
          <div className="plans__container">
            <div className="todo__header">
              <h1 className="todo__maintitle">TODO - lista</h1>
              <h2 className="todo__add" onClick={() => setIsOpen(true)}>
                <FontAwesomeIcon icon="fa-solid fa-plus" /> Új hozzáadása
              </h2>
            </div>
            {todo.length !== 0 ? (
              <div className="plans">
                {todo.map((element) => {
                  console.log(element.id);
                  let month = element.time.toDate().getUTCMonth() + 1; //months from 1-12
                  let day = element.time.toDate().getUTCDate();
                  let year = element.time.toDate().getUTCFullYear();
                  let hour = element.time.toDate().getHours();
                  let minutes = element.time.toDate().getMinutes();
                  {
                    minutes == 0 && (minutes = `00`);
                  }
                  return (
                    <div className="plan" style={{ cursor: "default" }}>
                      <div className="plan__title--container">
                        <h3 className="plan__title todo__smalltitle">
                          {element.type}
                        </h3>
                        <p className="plan__title todo__smalltitle">
                          {year}/{month}/{day} {hour}:{minutes}
                        </p>
                      </div>
                      <div className="plan__description--container">
                        {/* TODO SPLICEOLNI SZÖVEGET */}
                        <p className="todo__desc">{element.name}</p>
                        <button
                          className="todo__btn"
                          onClick={() => {
                            deleteTodo(element.id);
                          }}
                        >
                          Kész
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="empty">Jelenleg nincs tennivalód.</div>
            )}
          </div>
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
    </div>
  );
};

export default ToDo;

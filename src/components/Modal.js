import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../firebase";

const Modal = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState();
  const [type, setType] = useState("");
  const todoCollectionRef = collection(db, "todo");
  const addTodo = async (e) => {
    e.preventDefault();
    let updatedDate = new Date(date);
    await addDoc(todoCollectionRef, {
      name: name,
      time: updatedDate,
      type: type,
    });
  };

  if (!open) return null;
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <FontAwesomeIcon
          onClick={onClose}
          icon="fa-solid fa-xmark"
          className="modal__close"
        />
        <form className="modal__container">
          <label htmlFor="todo__type" className="modal__label">
            Feladat típusa
          </label>
          <select
            name="todo__type"
            id="todo__type"
            onChange={(e) => setType(e.target.value)}
            className="todo__select"
          >
            <option selected disabled>
              Válassz egy típust...
            </option>
            <option value="Edzés">Edzés</option>
            <option value="Meccs">Meccs</option>
            <option value="Orvosi vizsgálat">Orvosi vizsgálat</option>
            <option value="Csapatépítés">Csapatépítés</option>
            <option value="Más">Más...</option>
          </select>
          <label htmlFor="todo__name" className="modal__label">
            Elvégzendő feladat
          </label>
          <input
            type="text"
            name="todo__name"
            id="todo__name"
            className="todo__input"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="todo__name" className="modal__label">
            Feladat ideje
          </label>
          <input
            type="datetime-local"
            name="todo__name"
            id="todo__name"
            className="todo__input"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <button className="todo__btn" onClick={addTodo}>
            Létrehozás
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;

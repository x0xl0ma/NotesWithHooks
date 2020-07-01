import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/FirebaseContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Notes = ({ notes, onRemove }) => {
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const onRemoveHandler = (id) => {
    firebase
      .removeNotes(id)
      .then(() => alert.show("Note was delete!", "danger"))
      .catch(() => "Something goes wrong!", "danger");
  };

  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames="note" timeout={800}>
          <li className="list-group-item note" >
            <div>
              <strong>{note.title}</strong>

              <small>{new Date().toLocaleDateString()}</small>
            </div>

            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => onRemoveHandler(note.id)}
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

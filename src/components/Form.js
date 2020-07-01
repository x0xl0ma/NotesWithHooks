import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/FirebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => alert.show("Note was create", "success"))
        .catch(() => "Something goes wrong!", "danger");

      setValue("");
    } else {
      alert.show("Type Note!");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type note name"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
    </form>
  );
};

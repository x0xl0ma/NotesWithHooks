import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Notes } from "./Notes";
import { FirebaseContext } from "../context/firebase/FirebaseContext";
import { Loader } from "../components/Loader";

export const Home = () => {
  const { loading, notes, fetchNotes, removeNotes } = useContext(
    FirebaseContext
  );

  useEffect(() => {
    fetchNotes();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Form />

      <hr />

      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNotes} />}
    </Fragment>
  );
};

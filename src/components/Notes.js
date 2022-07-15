import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes} = context;
  return (
    <div className="container my-3">
      <h2>Your Notes</h2>
      <div className="row ">
        {notes.map((notes) => {
          return (
            <div className="col-md-3 my-3" key={notes._id}>
              <Noteitem title={notes.title.slice(0,25)} description={notes.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;

import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { notes, updatenotes } = props;

  return (
    <div className="card">
      <h5 className="card-header">{notes.title}</h5>
      <div className="card-body">
        <div className="d-flex justify-content-around mb-2">
          <button className="btn btn-outline-primary" onClick={()=>{updatenotes(notes)}}>
            <i className="fa-solid fa-pen"></i>
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              deleteNote(notes._id);
              props.showalert("Deleted Successfully","success")
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
        <p className="card-text">{notes.description}</p>
      </div>
    </div>
  );
};

export default Noteitem;

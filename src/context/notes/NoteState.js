import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setnotes] = useState(notesInitial);
  const getNote = async () => {
    console.log("Fetching notes");
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setnotes(json);
  };
  const addNote = async (title, description, tag) => {
    console.log("Adding A new Note");
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setnotes(notes.concat(note));
  };

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNotes);
  };

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("token"),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newnotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newnotes.length; index++) {
      const element = newnotes[index];
      if (element._id === id) {
        newnotes[index].title = title;
        newnotes[index].tag = tag;
        newnotes[index].description = description;
        break;
      }
    }
    setnotes(newnotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setnotes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;

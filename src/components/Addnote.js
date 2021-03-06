import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const Addnote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setnote({
      title: "",
      description: "",
      tag: "",
    })
    props.showalert("Note Added Successfully","success")
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
    
  };

  return (
    <div className="container my-3">
      <h1>Add A Note</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            minLength={3}
            required
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            minLength={5}
            required
            value={note.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlesubmit}
          disabled={note.title.length<3|| note.description.length<5}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Addnote;

import React from "react";

const Noteitem = (props) => {
  return (
    <div className="card">
      <h5 className="card-header">{props.title}...</h5>
      <div className="card-body">
         <div className="d-flex justify-content-around mb-2">
          <a href="/" className="btn btn-outline-primary">
            <i className="fa-solid fa-pen"></i>
          </a>
          <a href="/" className="btn btn-outline-danger">
            <i className="fa-solid fa-trash-can"></i>
          </a>
        </div>
        <p className="card-text">{props.description}</p>
       
      </div>
    </div>
  );
};

export default Noteitem;

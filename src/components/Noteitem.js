import React from "react";

const Noteitem = (props) => {
  return (
    <div className="card">
      <h5 className="card-header">{props.title}...</h5>
      <div className="card-body">
        <p className="card-text">
        {props.description}...
        </p>
      </div>
    </div>
  );
};

export default Noteitem;

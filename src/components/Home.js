import React from "react";

import NotesContainer from "./Notes";

function Home(props) {
  return (
    <>
      <NotesContainer showalert={props.showalert} />
    </>
  );
}

export default Home;

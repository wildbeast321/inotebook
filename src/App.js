import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import {useState} from "react"
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {

  const [alert, setalert] = useState({
    msg: "Note Deleted",
    type:"success"
  });

  return (
    <NoteState>
      <Router>
        <Navbar/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<SignUp/>}></Route>
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;

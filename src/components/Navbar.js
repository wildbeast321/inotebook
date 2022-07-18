import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
export default function Navbar(props) {
  let navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    props.showalert("Logged Out Successfully", "success")
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          iNotebook
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/About"
              >
                About
              </NavLink>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <div className="d-flex ">
              <Link
                to="/login"
                className="btn btn-outline-primary me-2"
                role="button"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-outline-primary"
                role="button"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <button
              className="btn btn-outline-primary me-2"
              onClick={handlelogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

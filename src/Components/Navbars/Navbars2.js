import React from "react";
import { Link } from "react-router-dom";
import "./Navbars2.css";
const Navbars2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  p-0 pt-1 ">
        <div className="container-fluid ">
          <Link className="navbar-brand text-primary fw-bold" to="/">
           Code/Mu. 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav fw-bold text-dark ">
              <li className="nav-item ">
                <Link className="nav-link a`ctive  " to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SkilExper">
                  skills and Experince
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  your notice
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbars2;

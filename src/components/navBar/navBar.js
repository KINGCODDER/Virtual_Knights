import React from "react";
import { useNavigate } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  function upComingEvents() {
    navigate("/events");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark nav">
        <div className="container-fluid nav--wrapper">
          <img className="image" src="Cesta.png" />
          <div
            className="collapse navbar-collapse  row mx-md-n1 "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav headings">
              <li className="nav-item home ">
                <a
                  className="nav-link active expand"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a
                  onClick={upComingEvents}
                  className="nav-link active expand"
                  href="#"
                >
                  Upcoming Events
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active expand" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active expand" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active expand" href="#">
                  Sign In
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active expand" href="#">
                  Sign Up
                </a>
              </li>
              <img className="image2" src="logo2.png" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  // const navigate = useNavigate();

  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-dark nav">
    //     <div className="container-fluid nav--wrapper">
    //       <img className="image" src="Cesta.png" />
    //       <div
    //         className="collapse navbar-collapse  row mx-md-n1 "
    //         id="navbarNavDropdown"
    //       >
    //         <ul className="navbar-nav headings">
    //           <li className="nav-item home ">
    //             <a
    //               className="nav-link active expand"
    //               aria-current="page"
    //               href="/"
    //             >
    //               Home
    //             </a>
    //           </li>
    //           <li className="nav-item ">
    //             <a className="nav-link active expand" href="/events">
    //               Upcoming Events
    //             </a>
    //           </li>
    //           <li className="nav-item ">
    //             <a className="nav-link active expand" href="/contactus">
    //               Contact Us
    //             </a>
    //           </li>
    //           <li className="nav-item ">
    //             <a className="nav-link active expand" href="/aboutus">
    //               About Us
    //             </a>
    //           </li>
    //           <li className="nav-item ">
    //             <a className="nav-link active expand" href="#">
    //               Sign In
    //             </a>
    //           </li>
    //           <li className="nav-item ">
    //             <a className="nav-link active expand" href="#">
    //               Sign Up
    //             </a>
    //           </li>
    //           <img className="image2" src="logo2.png" />
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img className="image" src="Cesta.png" alt="cesta-logo"/>
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
        <div className="collapse navbar-collapse shi-se-bna-leta" id="navbarSupportedContent">
          <ul className="navbar-shi-se-bna-leta">
            <li>
              <NavLink to="/">home</NavLink>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li>
              <NavLink to="/events">upcoming events</NavLink>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

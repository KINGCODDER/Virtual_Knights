import React from "react";
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
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="image" src="Cesta.png" />
        </a>
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
          <ul>
            <li>
              <a href="/">home</a>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li>
              <a href="/aboutus">About Us</a>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li>
              <a href="/events">upcoming events</a>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
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

import React, { useEffect } from "react";
import "./lastBlackPart.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

export default function LastBlackpart() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="blackPart-wrapper" data-aos="fade-up">
      <div className="blackPart blackPart1">
        <img alt="souvenir" className="image-black" src="Cesta.png" />
        <img alt="souvenir" className="image-black2" src="DTC Logo.png" />
        <div className="combo">
          <span style={{ marginLeft: 12 }}>Follow us</span>
          <div className="images">
            <a href="https://instagram.com/cesta_dtc?igshid=YmMyMTA2M2Y=">
              <img alt="souvenir"
                className="main-links"
                src="https://d1jh8w4crta3hl.cloudfront.net/thumbnail/Instagram%20Black%20and%20White%20Logo%20PNG_8769.jpeg"
              />
            </a>
            <a href="https://www.facebook.com/cestadtc">
              <img alt="souvenir"
                className="main-links"
                src="https://www.seekpng.com/png/full/148-1483528_facebook-instagram-youtube-facebook-icon-white-png-transparent.png"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/cesta-computer-science-club-of-delhi-
technical-campus/"
            >
              <img alt="souvenir"
                className="main-links"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVN2luUstVtNnFMWKLwVuG_QUV87_JxPwst8zsWKvjmmayxBo9--7zLUmVUeENhU8GNmg&usqp=CAU"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="blackPart">
        <div className="line1">
          <div className="area">
            <h2>Company</h2>
            <NavLink to="/">
            Home
            </NavLink>
            <NavLink to="/aboutus">
              <br />
              About us
            </NavLink>
            <NavLink to="/events">
              <br />
              Upcoming Events
            </NavLink>
            <NavLink to="/contactus">
              <br />
              Contact Us
            </NavLink>
          </div>
          <div className="area">
            <h2>My Account</h2>
            <a href="/register">Register</a>
            <a href="/Login">
              <br />
              Login
            </a>
            <NavLink href="/">
              <br /> Dashboard
            </NavLink>
          </div>
          <div className="blank"></div>
        </div>
        <div className="lowerLinks">
          <a href="/cookies"> Cookie Policy</a>
          <a href="/t&c"> Terms and Conditions</a>
          <a href="/privacy"> Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

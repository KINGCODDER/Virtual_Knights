import React, { useEffect } from "react";
import "./lastBlackPart.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LastBlackpart() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="blackPart-wrapper" data-aos="fade-up">
      <div className="blackPart blackPart1">
        <img className="image-black" src="Cesta.png" />
        <img className="image-black2" src="DTC Logo.png" />
        <div className="combo">
          <span style={{ marginLeft: 12 }}>Follow us</span>
          <div className="images">
            <a href="https://instagram.com/cesta_dtc?igshid=YmMyMTA2M2Y=">
              <img
                className="main-links"
                src="https://d1jh8w4crta3hl.cloudfront.net/thumbnail/Instagram%20Black%20and%20White%20Logo%20PNG_8769.jpeg"
              />
            </a>
            <a href="https://www.facebook.com/cestadtc">
              <img
                className="main-links"
                src="https://www.seekpng.com/png/full/148-1483528_facebook-instagram-youtube-facebook-icon-white-png-transparent.png"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/cesta-computer-science-club-of-delhi-
technical-campus/"
            >
              <img
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
            <a href="#">About us</a>
            <a href="#">
              <br />
              Solutions
            </a>
            <a href="#">
              <br />
              Upcoming Events
            </a>
            <a href="#">
              <br />
              Contacts
            </a>
          </div>
          <div className="area">
            <h2>My Account</h2>
            <a href="#">Register</a>
            <a href="#">
              <br />
              Login
            </a>
            <a href="#">
              <br /> Dashboard
            </a>
          </div>
          <div className="blank"></div>
        </div>
        <div className="lowerLinks">
          <a href="#"> Cookie Policy</a>
          <a href="#"> Terms and Conditions</a>
          <a href="#"> Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

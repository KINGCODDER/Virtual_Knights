import React from "react";
import president from "../Resource/ShivanshSaxena .jpg";
import "../st.css";

function AboutUs() {
  return (
    <div className="about_us container">
      <div className="banner container">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="leadership_details">
          <div className="details_about_us">
            <p>
              CESTA, Computer Technical Society functions under the Computer
              Science and Engineering Department. This society runs by the
              students under the guidance of faculty and technical society
              heads.
            </p>
          </div>
          <div className="president_image">
            <img src={president} alt="" />
          </div>
        </div>
        <button className="button button-custom">
          <span>JOIN US</span>
        </button>
        <div className="president_detail">
          <span>
            President <br />
          </span>
          <span>Shivansh Saxena</span>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

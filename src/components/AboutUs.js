import React from "react";
import president from "../Resource/ShivanshSaxena .jpg";
import TeamCard from "./TeamCard";
import image1 from "../Resource/image1.png";
import image2 from "../Resource/Agrim.png";
import image3 from "../Resource/Arpit.png";
import image4 from "../Resource/Hitesh.png";
import image5 from "../Resource/Kartick.png";
import image6 from "../Resource/Nishant.png";
import image7 from "../Resource/Shagun.png";
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

      <div className="team my-6">
        <h2>meet our team</h2>

        <div className="row">
          <TeamCard
            image={image1}
            name={"Pragya Bharti"}
            designation={"Vice-President"}
          />
          <TeamCard
            image={image2}
            name={"AgrimKulshrestha"}
            designation={"Event Coordinator"}
          />
          <TeamCard
            image={image3}
            style={{ top: "-19px" }}
            name={"Arpit Kumar Singh"}
            designation={"Secretary"}
          />
          <TeamCard
            image={image4}
            name={"Hitesh Bardia"}
            designation={"Treasurer"}
          />
          <TeamCard
            image={image5}
            name={"Kartick Chauhaan"}
            style={{ top: "-91px", right: "45px", width: "56%" }}
            designation={"Vice General Secretary"}
          />
          <TeamCard
            image={image6}
            name={"Nishant Bharti"}
            designation={"General Secretary"}
          />
          <TeamCard
            image={image7}
            name={"Shagun Srivastava"}
            designation={"Event Coordinator"}
            style={{ top: "-14px" }}
            details_style={{ top: "-101px" }}
          />
        </div>
      </div>

      <div className="our_objective">
        <h2>Our Objective and Membership Details</h2>
        <div className="objectives container">
          <div className="custom-list">
            <h4 className="my-3">Our Objective: </h4>
            <ul className="custom-list">
              <li>
                To provide a platform where students can case their technical,
                leadership and communication skills.
              </li>
              <li>
                To promote their technical skills related to latest technology.
              </li>
              <li>To provide a competitive environment among the students.</li>
              <li>To facilitate the environment for innovative ideas.</li>
              <li>To build the Practical Approach among the students.</li>
            </ul>
          </div>
          <div className="custom-list-2">
            <h4 className="my-3">For Membership: </h4>
            <ul className="custom-list-2">
              <li>Membership of CESTA is open to all students of DTC.</li>
              <li>
                All the members are involved in developing society purposes.
              </li>
              <li>
                The officers shall be President, Vice-President, General
                Secretary, Vice-General Secretary, Secretary and Treasurer.
              </li>
              <li>Officers are elected through the elections.</li>
              <li>Nominations will be filled before the elections.</li>
              <li>
                A majority of all the votes shall be necessary for a candidate
                to be elected.
              </li>
              <li>
                To be the part of CESTA, there are nominal charges of Rs 100.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

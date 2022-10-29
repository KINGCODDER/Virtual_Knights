import React from "react";
import {
  Address,
  Discord,
  Email,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Phone,
} from "./SocialIcons";

const Contact = () => {
  return (
    <>
      <div className="contact-1">
        <div className="triangle_bottom_left"></div>
      </div>
      <div className="contact-main">
        <div className="contact-main-top">
          <div className="contact-message">
            <h3>CONTACT US</h3>
            <p>
              CESTA is easily accessible by all the students irrespective of
              their years and streams.You can connect to our faculty coordinator
              and all the office bearers to give your esteemed feedback and any
              query related to CESTA will be resolved as soon as possible.
            </p>
          </div>
          <div className="contact-main-bottom">
          <div className="contact" id="phone">
            <span>
              <p className="connect-svg">
                <Phone fill="#000"/>
              </p>
            </span>
              <div className="contact-details">
                <p>Give us a call</p>
                <p>+91 99999 88888</p>
              </div>
          </div>
          <div className="contact" id="email">
            <span>
              <p className="connect-svg">
                <Email fill="#000"/>
              </p>
            </span>
              <div className="contact-details">
                <p>Send us an email</p>
                <p>cesta@delhitechnicalcampus.ac.in</p>
              </div>
          </div>
          <div className="contact" id="address">
            <span>
              <p className="connect-svg">
                <Address fill="#000"/>
              </p>
            </span>
              <div className="contact-details">
                <p>Come see us</p>
                <p>28/1, Delhi Technical Campus, Greater Noida, India, Uttar Pradesh</p>
              </div>
          </div>

        </div>
        </div>
          <div className="contact-connect">
          <p className="contact-connect-head">
            Connect with us:
          </p>
          <div className="contact-connect-icons">

            <a href="https://instagram.com/cesta_dtc?igshid=YmMyMTA2M2Y">
              <span className="contact-social contact-insta">
                <p className="connect-svg" ><Instagram fill="#E1306C " /> </p>
                <p className="connect-text" >Instagram</p>
              </span>
            </a>
            <a href="https://www.facebook.com/cestadtc">
              <span className="contact-social contact-fb">
                <p className="connect-svg" ><Facebook fill="#1877f2" /> </p>
                <p className="connect-text" >Facebook</p>
              </span>
            </a>
            <a href="https://www.linkedin.com/company/cesta-computer-science-club-of-delhi-technical-campus/">
              <span className="contact-social contact-linkedin">
                <p className="connect-svg" ><Linkedin fill="#0077b5" /> </p>
                <p className="connect-text" >LinkedIn</p>
              </span>
            </a>
            <a href="https://github.com/cestasociety">
              <span className="contact-social contact-github">
                <p className="connect-svg" ><Github fill="#6e5494" /> </p>
                <p className="connect-text" >GitHub</p>
              </span>
            </a>
            <a href="https://discord.gg/knZuyUsU">
              <span className="contact-social contact-dc">
                <p className="connect-svg" ><Discord fill="#5865f2" /> </p>
                <p className="connect-text" >Discord</p>
              </span>
            </a>
          </div>
            
          </div>
        
      </div>
    </>
  );
};

export default Contact;

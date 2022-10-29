import React, { useEffect } from "react";
import "./firstInfo.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FirstInfo() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="firstInfo--wrapper">
        <div className="firstInfo firstInfo1">
          <div className="card text-bg-light mb-3 cards" data-aos="fade-right">
            <div className="card-header">
              <h4>WHAT IS CESTA ?</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                CESTA, Computer Technical Society functions under the Computer
                Science and Engineering Department.
              </p>
            </div>
          </div>
        </div>
        <div className="firstInfo firstInfo2">
          <div className="card text-bg-light mb-3 cards" data-aos="fade-down">
            <div className="card-header">
              <h4>WHY CESTA ?</h4>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  To provide a platform where students can case their technical,
                  leadership and communication skills.
                </li>
                <li>
                  To provide a competitive environment among the students.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="firstInfo firstInfo3">
          <div className="card text-bg-light mb-3 cards" data-aos="fade-up">
            <div className="card-header">
              <h4>WHO RUNS CESTA ?</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                This society runs by the students under the guidance of faculty
                and technical society heads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

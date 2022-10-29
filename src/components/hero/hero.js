import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src="game.png" className="d-block w-100 image--hero" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h2>CESTA CONDUCTS GAMING EVENTS</h2>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="hackerthon.jpg"
            className="d-block w-100 image--hero"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>CESTA CONDUCTS HACKERTHONS</h2>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="webinar.jpg"
            className="d-block w-100 image--hero"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 style={{ color: "black" }}>
              CESTA CONDUCTS INTERACTIVE WEBINARS
            </h2>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

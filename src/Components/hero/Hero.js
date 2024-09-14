import React from "react";
import Image from "./study.png";

function Hero() {
  return (
    <section className="startHero">
      <div className="container py-5 px-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="hero_welcome mb-1 fw-bold ">Welcome</p>
            <h1 className="hero_title display-4 ">
              Best Learning Opportunities
            </h1>
            <p className="lead">
              Our goal is to make online education work for everyone.
            </p>
            <div className="d-flex gap-3 mt-4 hero_btn">
              <a href="#" className="btn btn-lg hero_btn1">
                Join Us
              </a>
              <a href="#" className="btn btn-outline-success btn-lg hero_btn2">
                Learn More
              </a>
            </div>
          </div>

          <div className="col-md-6 mt-3 text-center">
            <img
              src={Image}
              alt="Learning Opportunities"
              className="img-fluid"
              style={{ maxHeight: "500px", minHeight: "200px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

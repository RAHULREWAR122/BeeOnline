import React from "react";
import { HiArrowRight } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-2" href="#">
          BrandName
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3 ">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex">
            <a href="#" className="btn text-success me-3">
              Login
            </a>
            <a
              href="#"
              className="btn text-white"
              style={{ background: "#96BB7C" }}
            >
              Join Us{" "}
              <span className="me-2">
                <HiArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

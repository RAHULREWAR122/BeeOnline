import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaPencil } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Packages() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12 text-lg-start text-center mb-4 mb-lg-0">
          <div className="d-flex justify-content-lg-start justify-content-center">
            <div
              className="bg-danger"
              style={{ width: "40px", height: "3px" }}
            ></div>{" "}
          </div>
          <h2 className="my-3 fw-bold">Approdable Packages</h2>
          <p
            className="text-muted mx-lg-0 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <a
            href="#"
            className="text-success fw-bold mt-3 learnMore d-inline-block"
          >
            Learn More
            <span className="ms-2 arrow">
              <FaArrowRight />
            </span>
          </a>
        </div>
        <div className="col-lg-6 col-12 d-lg-flex justify-content-lg-end justify-content-center">
          <div className="row justify-content-center">
            <div className="col-md-6 col-12 mb-4">
              <div className="card border-0 shadow rounded text-left p-4">
                <div className="card-body">
                  <div className="mb-3 iconShow">
                    <HiOutlineDesktopComputer
                      className="text-white"
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                  <h5 className="card-title mb-3 fw-bold">Certified Teacher</h5>
                  <div className="w-100 d-flex justify-content-start mb-3">
                    <div
                      className="bg-danger"
                      style={{ width: "40px", height: "3px" }}
                    ></div>
                  </div>
                  <p className="card-text text-muted">
                    The gradual accumulation of information about...
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 mb-4">
              <div className="card border-0 shadow rounded text-left p-4">
                <div className="card-body">
                  <div className="mb-3 iconShow">
                    <FaPencil
                      className="text-white"
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                  <h5 className="card-title mb-3 fw-bold">
                    Expert Instruction
                  </h5>
                  <div className="w-100 d-flex justify-content-start mb-3">
                    <div
                      className="bg-danger"
                      style={{ width: "40px", height: "3px" }}
                    ></div>
                  </div>
                  <p className="card-text text-muted">
                    The gradual accumulation of information about...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;

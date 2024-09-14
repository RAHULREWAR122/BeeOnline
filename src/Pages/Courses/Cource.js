import React, { useState } from "react";

const OurCourse = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email.trim()) {
      return alert("Please enter your email.");
    }
    if (email.length > 12) {
      console.log(email);
    } else {
      alert("Please provide a correct email.");
    }
    setEmail("");
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "90vh", background: "#FDF3F1", fontFamily: "Poppins" }}
    >
      <div className="text-center px-3">
        <h6 className="text-success">Newsletter</h6>
        <h2 className="fw-bold" style={{ color: "#252B42" }}>
          Watch our Courses
        </h2>
        <p className="lead text-muted" style={{ fontSize: "14px" }}>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <form style={{ width: "100%", maxWidth: "400px" }}>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                style={{ borderRadius: "0" }}
              />
            </div>
          </form>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn mb-2 "
            style={{
              height: "48px",
              background: "#96BB7c",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              border: "none",
              color: "white",
              width: "100%",
              maxWidth: "120px",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCourse;

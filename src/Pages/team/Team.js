import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Julian Jameson",
      profession: "Software Engineer",
      image:
        "https://plus.unsplash.com/premium_photo-1661304704888-542933309d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFuZHNvbWUlMjBwcm9maWNhbm5seSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Alice Smith",
      profession: "Graphic Designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccN9XNVy2Hg1icHxJJ73YSiXXf0kAiMTqdA&s",
    },
    {
      name: "Mark Johnson",
      profession: "Product Manager",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1eOT6Wa1sN-PlVvpDqczRtCRYD1AviG1RQ&s",
    },
    {
      name: "Sara Williams",
      profession: "Data Analyst",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYB9d847Ct6d4Ul5U9pHT4exxWVfQHdV4-A&s",
    },
  ];

  return (
    <div className="container py-5 " style={{ fontFamily: "poppins" }}>
      <div className="row">
        <div className="col-12 text-lg-start text-center mb-4">
          <h5 className="my-3" style={{ color: "#96BB7C" }}>
            Team
          </h5>
          <h2 className="fw-bold" style={{ color: "#252B42" }}>
            Get Quality Education
          </h2>
          <p
            className="text-muted mx-lg-0 mx-auto"
            style={{ maxWidth: "600px", color: "#737373" }}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
      <div className="">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {teamMembers.map((member, index) => (
            <div
              className="p-4 d-flex justify-content-center align-items-center"
              key={index}
              style={{ flex: "1 0 250px", maxWidth: "290px" }}
            >
              <div
                className="card border-0 shadow rounded p-1 text-center overflow-hidden"
                style={{ height: "300px", width: "100%" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="img-fluid rounded mb-2 "
                  style={{ objectFit: "cover", width: "100%", height: "60%" }}
                />
                <h5
                  className="card-title mb-1 fw-bold"
                  style={{ color: "#252B42" }}
                >
                  {member.name}
                </h5>
                <p style={{ color: "#737373" }}>{member.profession}</p>
                <div className="d-flex justify-content-center">
                  <a href="#" className="me-3" style={{ color: "#96BB7C" }}>
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="me-3" style={{ color: "#96BB7C" }}>
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="" style={{ color: "#96BB7C" }}>
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

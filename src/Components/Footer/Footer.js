import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-light text-dark py-5"
      style={{ fontFamily: "poppins" }}
    >
      <Container>
        <Row>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h5 style={{ color: "#252B42" }}>Company Info</h5>
            <ul className="list-unstyled" style={{ color: "#737373" }}>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h5 style={{ color: "#252B42" }}>Legal</h5>
            <ul className="list-unstyled" style={{ color: "#737373" }}>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h5 style={{ color: "#252B42" }}>Features</h5>
            <ul className="list-unstyled" style={{ color: "#737373" }}>
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h5 style={{ color: "#252B42" }}>Resources</h5>
            <ul className="list-unstyled" style={{ color: "#737373" }}>
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h5 style={{ color: "#252B42" }}>Get in Touch</h5>
            <ul className="list-unstyled" style={{ color: "#737373" }}>
              <li>
                <FaPhone size={24} style={{ color: "#96BB7C" }} /> (480)
                555-0103
              </li>
              <li>
                <FaMapMarkerAlt size={24} style={{ color: "#96BB7C" }} /> 4517
                Washington Ave. Manchester, Kentucky 39495
              </li>
              <li>
                <FaEnvelope size={24} style={{ color: "#96BB7C" }} />{" "}
                debra.holt@example.com
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-left" style={{ color: "#737373" }}>
            <p>Made with Love by Figmaland All Right Reserved</p>
          </Col>
          <Col
            lg={9}
            md={6}
            sm={12}
            className="d-flex justify-content-lg-end justify-content-md-start mb-4"
          >
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" style={{ color: "#96BB7C" }}>
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" style={{ color: "#96BB7C" }}>
                  <FaTwitter size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a style={{ color: "#96BB7C" }} href="#">
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

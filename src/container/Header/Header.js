import React from "react";
import "./Header.css";
import { Col, Container, Row } from "react-bootstrap";
import { images } from "../../constants";

const Header = () => {
  return (
    <div>
      <Container fluid className="header_section">
        <Row className="header">
          <Col xs={12} lg={7}>
            <div className="header_text-box">
              <div className="header_text">
                <p>
                  Hi there 👋, <br /> I am <span>Nirmal</span>,
                </p>
                <p>Frontend Web Developer & UI Designer</p>
              </div>
            </div>
          </Col>
          <Col md={5} className="d-none d-lg-block">
            <div className="header_image">
              <img src={images.me} alt="nirmal" loading="lazy" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;

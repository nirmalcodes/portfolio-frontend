import React from "react";
import { Col, Row } from "react-bootstrap";
import { CommonCard } from "../../components";
import "./NiServices.css";

const NiServices = () => {
  return (
    <Row className="vh_100 app_content-wrap align_center content_cente px-4">
      <Col lg={4}>
        <h4 className="heading_text3 mb-4">My Services</h4>
      </Col>
      <Col lg={8}>
        <Row>
          <Col lg={6} className="mb-4">
            <CommonCard>
              <div className="services">
                <h4>Frontend Web Development</h4>
                <p>
                  I will Develop an Amazing Frontend for your Website using
                  React/ HTML & CSS with MUI/ Bootstrap
                </p>
              </div>
            </CommonCard>
          </Col>
          <Col lg={6} className="mb-4">
            <CommonCard>
              <div className="services">
                <h4>Frontend Web Development</h4>
                <p>
                  I will Develop an Amazing Frontend for your Website using
                  React/ HTML & CSS with MUI/ Bootstrap
                </p>
              </div>
            </CommonCard>
          </Col>
          <Col lg={6} className="mb-4">
            <CommonCard>
              <div className="services">
                <h4>Frontend Web Development</h4>
                <p>
                  I will Develop an Amazing Frontend for your Website using
                  React/ HTML & CSS with MUI/ Bootstrap
                </p>
              </div>
            </CommonCard>
          </Col>
          <Col lg={6} className="mb-4">
            <CommonCard>
              <div className="services">
                <h4>Frontend Web Development</h4>
                <p>
                  I will Develop an Amazing Frontend for your Website using
                  React/ HTML & CSS with MUI/ Bootstrap
                </p>
              </div>
            </CommonCard>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NiServices;

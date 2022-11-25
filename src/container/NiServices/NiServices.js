import React from "react";
import { Col, Row } from "react-bootstrap";
import { CommonCard } from "../../components";
import "./NiServices.css";

const NiServices = ({ servicesData }) => {
  return (
    <Row className="vh_100 app_content-wrap align_center content_cente px-4">
      <Col lg={4}>
        <h4 className="heading_text3 mb-4">My Services</h4>
      </Col>
      <Col lg={8}>
        <Row className="content_cente">
          {servicesData.map((service, index) => (
            <Col lg={6} className="mb-4" key={index}>
              <CommonCard>
                <div className="services">
                  <h4>{service.title}</h4>
                  <p>
                    {service.description}
                  </p>
                </div>
              </CommonCard>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default NiServices;

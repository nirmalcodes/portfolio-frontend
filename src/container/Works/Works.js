import React from "react";
import "./Works.css";

import { Col, Container, Row } from "react-bootstrap";
import { NiCard } from "../../components";
import { urlFor } from "../../client";

const Works = ({ workData }) => {
  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <Col>
          <h4 className="txt_center heading_text1">My Works</h4>
        </Col>
      </Row>
      <Row className="content_cente">
        {workData.map((work, index) => (
          <Col md={6} className="mb-4" key={index}>
            <NiCard
              name={work.title}
              date={work.description}
              image={urlFor(work.imgUrl)}
              preview={work.previewLink}
              github={work.githubLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Works;

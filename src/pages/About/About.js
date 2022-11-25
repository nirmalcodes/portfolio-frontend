import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import { NiServices } from "../../container";
import { client } from "../../client";

const About = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services" && hidden == false]';

    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);

  // console.log(services);

  return (
    <Container>
      <Row className="vh_100 align_center content_cente px-4">
        <Col>
          <div className="about_me">
            <h4 className="txt_center heading_text3 mb-4">About me</h4>
            <p className="txt_center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              volutpat sapien sit amet magna fermentum, ut auctor mi tempus.
              Pellentesque id massa lacus. Vestibulum pellentesque malesuada
              enim, eget gravida elit finibus sit amet. In ipsum elit, vulputate
              eu arcu quis, dictum lobortis ex.
            </p>
          </div>
        </Col>
      </Row>
      {services.length > 0 && <NiServices servicesData={services} />}
    </Container>
  );
};

export default About;

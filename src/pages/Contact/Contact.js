import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CommonCard } from "../../components";
import "./Contact.css";
import { FiPhone, FiMail, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="vh_100 app_content-wrap">
      <Container>
        <Row className="mb-4">
          <Col>
            <h4 className="heading_text3 txt_center mb-4">Contact me</h4>
          </Col>
        </Row>
        <Row className="content_cente mb-4">
          <Col lg={4} className="mb-4">
            {/* <a href="#" className="txt_center contacts"> */}
              <CommonCard padding="2rem">
                <FiMail />
                <span>srnfernando102@gmail.com</span>
              </CommonCard>
            {/* </a> */}
          </Col>
          <Col lg={4} className="mb-4">
            {/* <a href="#" className="txt_center contacts"> */}
              <CommonCard padding="2rem">
                <FiPhone />
                <span>+94710814896</span>
              </CommonCard>
            {/* </a> */}
          </Col>
        </Row>
        <Row className="content_cente mb-4">
          <Col lg={8}>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Jhon" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="jhon@mail.com"
                />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  size="lg"
                  as="textarea"
                  rows={5}
                  placeholder="Your message here"
                />
              </Form.Group>
              <Row>
                <Col>
                  <Button variant="primary" size="lg" type="submit" block>
                    <FiSend className="mr-2"/>
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

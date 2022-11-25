import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CommonCard } from "../../components";
import "./Contact.css";
import { FiPhone, FiMail, FiSend } from "react-icons/fi";
import { client } from "../../client";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "contacts" && hidden == false]';

    client.fetch(query).then((data) => {
      setContacts(data);
    });
  }, []);

  // console.log(contacts);

  return (
    <div className="vh_100 app_content-wrap">
      <Container>
        <Row className="mb-4">
          <Col>
            <h4 className="heading_text3 txt_center mb-4">Contact me</h4>
          </Col>
        </Row>
        {contacts.length > 0 && (
          <Row className="content_cente mb-4">
            {contacts.map((contact, index) => (
              <Col lg={4} className="mb-4">
                <a
                  href={
                    contact.title === "Mobile"
                      ? `tel:${contact.contact}`
                      : `mailto:${contact.contact}`
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="txt_center contacts"
                >
                  <CommonCard padding="2rem">
                    {contact.title === "Mobile" ? <FiPhone /> : <FiMail />}

                    <span>{contact.contact}</span>
                  </CommonCard>
                </a>
              </Col>
            ))}
          </Row>
        )}
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
                    <FiSend className="mr-2" />
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

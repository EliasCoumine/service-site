import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  { title: "Teeth Cleaning", img: "https://via.placeholder.com/300x200" },
  { title: "Dental Implants", img: "https://via.placeholder.com/300x200" },
  { title: "Whitening", img: "https://via.placeholder.com/300x200" },
  { title: "Braces & Invisalign", img: "https://via.placeholder.com/300x200" }
];

const Services = () => (
  <section id="services" className="py-5">
    <Container>
      <h2 className="text-primary text-center mb-4">Our Services</h2>
      <Row>
        {services.map((s, idx) => (
          <Col md={6} lg={3} key={idx} className="mb-4">
            <Card>
              <Card.Img variant="top" src={s.img} />
              <Card.Body>
                <Card.Title>{s.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Services;

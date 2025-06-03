import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import braces from '../images/braces.jpg';
import teethCleaning from '../images/teeth-cleaning.jpg';
import teethWhitening from '../images/teeth-whitening.gif';
import dentalImplants from '../images/dental-implants.jpg';

const services = [
  { 
    title: "Teeth Cleaning", 
    img: teethCleaning, 
    description: "Professional removal of plaque and tartar to keep your teeth healthy and bright." 
  },
  { 
    title: "Dental Implants", 
    img: dentalImplants, 
    description: "Durable, natural-looking replacements for missing teeth to restore your smile." 
  },
  { 
    title: "Whitening", 
    img: teethWhitening, 
    description: "Brighten your teeth several shades with our safe and effective whitening treatments." 
  },
  { 
    title: "Braces & Invisalign", 
    img: braces, 
    description: "Straighten your teeth discreetly with clear aligners or traditional braces." 
  }
];

const Services = () => (
  <section id="services" className="py-5">
    <Container>
      <h2 className="text-primary text-center mb-4">Our Services</h2>
      <Row className="g-4">
        {services.map((s, idx) => (
          <Col md={6} lg={3} key={idx} className="d-flex">
            <Card className="w-100 h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={s.img} 
                alt={s.title}
                style={{ height: '180px', objectFit: 'cover' }} 
              />
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title>{s.title}</Card.Title>
                <Card.Text className="text-muted">{s.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Services;

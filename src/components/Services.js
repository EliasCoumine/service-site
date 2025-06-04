import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import braces from '../images/braces.jpg';
import teethCleaning from '../images/teeth-cleaning.jpg';
import teethWhitening from '../images/teeth-whitening.gif';
import dentalImplants from '../images/dental-implants.jpg';

import teethCleaningIcon from '../images/icons/teethcleaning.png';
import implantIcon from '../images/icons/implant.png';
import whiteningIcon from '../images/icons/whitening.png';
import bracesIcon from '../images/icons/braces.png';

const services = [
  { 
    icon: teethCleaningIcon,
    title: "Teeth Cleaning", 
    img: teethCleaning, 
    description: "Professional removal of plaque and tartar to keep your teeth healthy and bright." 
  },
  { 
    icon: implantIcon,
    title: "Dental Implants", 
    img: dentalImplants, 
    description: "Durable, natural-looking replacements for missing teeth to restore your smile." 
  },
  { 
    icon: whiteningIcon,
    title: "Whitening", 
    img: teethWhitening, 
    description: "Brighten your teeth several shades with our safe and effective whitening treatments." 
  },
  { 
    icon: bracesIcon,
    title: "Braces & Invisalign", 
    img: braces, 
    description: "Straighten your teeth discreetly with clear aligners or traditional braces." 
  }
];

const Services = () => (
  <section id="services" className="py-5">
    <div className="services-big-card mx-auto">
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
                  <Card.Title style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {s.title}
                    <img
                      src={s.icon}
                      alt=""
                      style={{
                        width: "1.4em",
                        height: "1.4em",
                        marginLeft: "0.3em"
                      }}
                    />
                  </Card.Title>
                  <Card.Text className="text-muted">{s.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </section>
);

export default Services;

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../images/logo.png'; // or your new PNG logo

const About = () => (
  <section id="about" className="py-5 bg-light">
    <Container>
      {/* Slogan inserted here */}
      <h3 className="text-center mb-4 fst-italic" style={{
                background: 'linear-gradient(to right, #007bff, #0056b3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}
        >Gentle care for brighter smiles
        </h3>


      <Row className="align-items-center">
        <Col md={6} className="text-center mb-4 mb-md-0">
          <Image src={logo} fluid rounded style={{ maxWidth: '300px' }} />
        </Col>
        <Col md={6}>
          <h2 className="text-primary">About Our Clinic</h2>
          <p>
            DentalCare Clinic is committed to providing gentle, personalized dental care for patients of all ages. Our professional team ensures a comfortable and caring experience every visit.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../images/logo.png'

const About = () => (
  <section id="about" className="py-5 bg-light">
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={logo} fluid rounded style={{ maxWidth: '450px' }}/>
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

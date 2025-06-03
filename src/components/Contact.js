import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => (
  <section id="contact" className="py-5">
    <Container>
      <h2 className="text-primary text-center mb-4">Contact Us</h2>
      <Row>
        <Col md={6}>
          <h5>Address</h5>
          <p>123 Dental Street, Ottawa, ON</p>
          <h5>Email</h5>
          <p>info@dentalcare.com</p>
          <h5>Phone</h5>
          <p>(613) 456-7890</p>
        </Col>
        <Col md={6}>
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.831529257774!2d-75.69966358444326!3d45.42152907910079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0509f3170cf5%3A0x6c16ec3d2fa0a55c!2sOttawa!5e0!3m2!1sen!2sca!4v1635887666681!5m2!1sen!2sca"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;

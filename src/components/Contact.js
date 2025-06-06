import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

const Contact = () => (
  <section id="contact" className="contact-section-bg py-5">
    <Container>
      {/* Centered section title */}
      <h2 className="text-primary text-center mb-5" style={{ fontWeight: 700 }}>
        {/* <span role="img" aria-label="tooth" style={{ fontSize: "1.5em" }}></span> */}
        Contact Us
      </h2>

      {/* Card component w. shadow */}
      <Card className="shadow-lg p-4 contact-card">
        <Row className="align-items-center g-4">
          <Col md={5}>
            <div>
              <div style={{ marginBottom: '0.8em' }}>
                <strong>Address:</strong><br />
                123 Dental Street, Ottawa, ON
              </div>
              <div style={{ marginBottom: '0.8em' }}>
                <strong>Email:</strong><br />
                info@dentalcare.com
              </div>
              <div>
                <strong>Phone:</strong><br />
                (613) 456-7890
              </div>
            </div>
          </Col>
          <Col md={7}>
            {/* Map */}
            <div className="map-responsive">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.831529257774!2d-75.69966358444326!3d45.42152907910079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0509f3170cf5%3A0x6c16ec3d2fa0a55c!2sOttawa!5e0!3m2!1sen!2sca!4v1635887666681!5m2!1sen!2sca"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '1.2rem' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  </section>
);

export default Contact;
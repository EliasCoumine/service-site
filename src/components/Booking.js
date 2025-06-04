import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

const Booking = () => {

  // declared var today
  const today = new Date().toISOString().split('T')[0];

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd handle real submission here
    setShow(true);
    e.target.reset(); // Optional: clear form
  };

  const handleClose = () => setShow(false);

  return (
    <section id="booking" className="py-5 bg-white">
      <Container>
        <h2 className="text-primary text-center mb-4">Book an Appointment</h2>
        <p className="text-center text-muted mb-5">
          Fill out the form below and we’ll get back to you shortly to confirm your visit.
        </p>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" inputMode='numeric' pattern="[0-9 ()+-]{10,}"   title='Please enter a valid phone number' placeholder="(123) 456-7890" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formDate" className="mb-3">
                    <Form.Label>Preferred Date</Form.Label>
                    <Form.Control type="date" min={today} required />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formService" className="mb-3">
                <Form.Label>Select a Service</Form.Label>
                <Form.Select required>
                  <option value="">Choose...</option>
                  <option>Teeth Cleaning</option>
                  <option>Dental Implants</option>
                  <option>Whitening</option>
                  <option>Braces & Invisalign</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Label>Additional Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Any specific concerns or requests?" />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Submit Booking
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        {/* Modal */}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Booking Confirmed</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thank you! Your appointment request has been submitted. We’ll contact you soon to confirm the details.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default Booking;

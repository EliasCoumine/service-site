import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Booking = () => (
  <section id="booking" className="py-5 bg-light">
    <Container>
      <h2 className="text-primary text-center mb-4">Book an Appointment</h2>
      <Form>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formDate" className="mb-3">
          <Form.Label>Preferred Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Additional Notes</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  </section>
);

export default Booking;

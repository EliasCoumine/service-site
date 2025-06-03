import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-primary text-white text-center py-3">
    <Container>
      <small>&copy; {new Date().getFullYear()} DentalCare Clinic. All rights reserved.</small>
    </Container>
  </footer>
);

export default Footer;

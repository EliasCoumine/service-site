import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroCarousel = () => (
  <Carousel fade id="home">
    <Carousel.Item>
      <img className="d-block w-100" src="https://via.placeholder.com/1600x500/007BFF/FFFFFF?text=Healthy+Smiles+Start+Here" alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="https://via.placeholder.com/1600x500/0056b3/FFFFFF?text=Trusted+Dental+Care" alt="Second slide" />
    </Carousel.Item>
  </Carousel>
);

export default HeroCarousel;

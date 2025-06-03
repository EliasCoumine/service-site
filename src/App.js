import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import HeroCarousel from './components/HeroCarousel';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <HeroCarousel />
      <About />
      <Services />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

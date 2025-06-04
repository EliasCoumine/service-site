import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaHome, FaTooth, FaCalendarAlt, FaEnvelope } from 'react-icons/fa'; /* icons imported from react */
import '../App.css'; 


const navLinks = [
  { href: "#about", icon: <FaHome />, label: "About" },
  { href: "#services", icon: <FaTooth />, label: "Services" },
  { href: "#booking", icon: <FaCalendarAlt />, label: "Book" },
  { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
];

const Navigation = () => {
  {/* tracks the state of the icon to add an underline when needed */}
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <Navbar bg="light" fixed="top" className="d-flex justify-content-between px-4 py-2 shadow-sm">
      <span className="navbar-brand text-primary">DentalCare Clinic</span>

      <div className="nav-icon-bar d-flex gap-3 align-items-center">
        {/*quick loop to iterate over the navLinks array */}
        {navLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className={`icon-link ${activeIdx === idx ? 'active' : ''}`}
            onClick={() => setActiveIdx(idx)}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </Navbar>
  );
};

export default Navigation;
import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaHome, FaTooth, FaCalendarAlt, FaEnvelope } from 'react-icons/fa'; /* icons imported from react */
import '../App.css'; 
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


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
    <OverlayTrigger
      key={idx}
      placement="bottom"
      overlay={<Tooltip id={`tooltip-${idx}`}>{link.label}</Tooltip>}
    >
      <a
        href={link.href}
        className={`icon-link ${activeIdx === idx ? 'active' : ''}`}
        onClick={() => setActiveIdx(idx)}
        aria-label={link.label}
        style={{ cursor: 'pointer' }}
      >
        {link.icon}
      </a>
    </OverlayTrigger>
  ))}
</div>
    </Navbar>
  );
};

export default Navigation;
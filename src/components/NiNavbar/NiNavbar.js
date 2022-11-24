import React, { useState } from "react";
import "./NiNavbar.css";
import { Nav, Navbar } from "react-bootstrap";
import NirmalFill from "../NirmalFill/NirmalFill";
import { Link, useLocation } from "react-router-dom";

const NiNavbar = ({ links }) => {
  const [scrolled, setScrolled] = useState(false);

  const pageScrolled = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", pageScrolled);

  const location = useLocation();

  return (
    <Navbar
      // bg={scrolled ? "dark" : ""} variant="dark"
      className={`glass_nav ${scrolled ? "glass_bg" : ""}`}
      expand="lg"
      fixed="top"
    >
      <Navbar.Brand href="#home">
        <NirmalFill height={28} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {links.map((link, index) => (
            <Link
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "active" : ""
              }`}
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NiNavbar;

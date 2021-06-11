import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" className="navbar-brand">
        <h4 className="mx-3">InstruMed</h4>
      </Link>

      <Navbar.Toggle className="mr-2" aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-3">
          <Link to="/dashboard" className="nav-link mx-3">
            Dashboard
          </Link>

          <Link to="/login" className="nav-link mx-3">
            Login
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

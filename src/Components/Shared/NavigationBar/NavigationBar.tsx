import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    
    <Navbar.Brand className="ms-2" href="#home">InstruMed</Navbar.Brand>
    
    <Navbar.Toggle className="me-2" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ms-auto me-4">
      <Nav.Link className="ms-2" href="#deets">Dashboard</Nav.Link>
      <Nav.Link className="ms-2" eventKey={2} href="#memes">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
};

export default NavigationBar;
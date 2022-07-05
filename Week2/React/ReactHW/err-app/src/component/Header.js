import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav ,Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >Images</Navbar.Brand>
    <Nav className="me-auto">
      {/* <Nav.Link as={NavLink} to="/">Home</Nav.Link> */}
      <Nav.Link as={NavLink} to="/">Cards</Nav.Link>
      <Nav.Link as={NavLink} to="/About">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;

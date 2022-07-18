import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../images/logo.png";
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img src={Logo} className="logo"></img> شكلها{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/PlantItem" className="NavLink">
                فن الأوريغامي
              </Nav.Link>
              <Nav.Link as={NavLink} to="/ClayItems" className="NavLink">
              صناعة الفخار              </Nav.Link>
              <Nav.Link as={NavLink} to="/PlantItem" className="NavLink">
                نباتات
              </Nav.Link>
              <Nav.Link href="#" className="NavLink">
                من نحن؟
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
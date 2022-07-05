import React from 'react'
import {NavLink} from "react-router-dom"
import { Button,Navbar,Container,Nav,Form, FormControl} from 'react-bootstrap';
export default function Header() {
  return (
    <div>
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
<script>var Alert = ReactBootstrap.Alert;</script>

{/* ============================= nav bar =============================================== */}

      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={NavLink} to="/">Movie</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
      <Nav.Link as={NavLink} to="/About">About</Nav.Link>
      <Nav.Link as={NavLink} to="/Extra">Extra</Nav.Link>
    </Nav>
    <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
    </Container>
  </Navbar>
      
        {/* <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Extra">Extra</Link> */}
    
    </div>
  )
}

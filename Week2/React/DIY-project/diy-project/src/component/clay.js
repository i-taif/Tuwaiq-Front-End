import React from "react";
import { Card, Button, Col } from "react-bootstrap";

export default function clay(props) {
  return (
    
    <Col sm={3} className='m-4'>
    <Card style={{ width: "20rem", color:'#007070'}}>
      <Card.Img height={300} variant="top" src={props.clay.img} />
      <Card.Body>
        <Card.Title>{props.clay.title}</Card.Title>
        <Button variant="outline-secondary" style={{color: '#007070' }}>شكلها  </Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

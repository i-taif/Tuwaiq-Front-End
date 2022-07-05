import React, { useState ,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge} from 'react-bootstrap';
function About() {
    const [message, setMessage] = useState('Hi there');

    useEffect(() => {
      setTimeout(() => {
        setMessage("Welcome to my Website ;)");
      },2000)
    })
    
  return (
   
       <Badge bg="dark" text="light" style={{fontSize:60}} className='m-5'>
        {message}
      </Badge>

  );
}

export default About;

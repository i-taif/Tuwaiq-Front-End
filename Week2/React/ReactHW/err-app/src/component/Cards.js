import React, { useEffect,useState } from "react";
import CardData from "./CardData";
import { Card, Button, Container } from "react-bootstrap";
function Cards() {
 let [memeImage, setMemeImage] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  };
  useEffect(() => {
    myRandomEmg()
  },[]);

  return (
       <Container className="m-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          height="200px"
          width="200px"
          variant="top"
          src={memeImage}
        />
        <Card.Body>
          <Button onClick={myRandomEmg} variant="outline-light">
            Get a new image
          </Button>
        </Card.Body>
      </Card>
      </Container>
 );
}

export default Cards;

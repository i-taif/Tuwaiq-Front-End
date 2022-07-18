import React from "react";
import Clay from "./clay";
import monstera from "../images/monstera-plant.jpg";
import potted from "../images/potted-plant.jpg";
// import Foxglove from "../foxglove-plant.jpg";
import Basil from "../images/basil-plant.jpg";
import House from "../images/house-plant.jpg";
import Backlit from "../images/backlit-monstera.jpg";
import {Row,Container} from "react-bootstrap";

// import courtneyCook from "../images/courtney-cook.jpg";
// import handmade from "../images/handmade.jpg";
// import handmade2 from "../images/handmade2.jpg";

export default function clayItems(props) {
  const plantItems = [
    {
      title: "Monstera Plant",
      img: monstera,
    },
    {
      title: "Potted Plant",
      img: potted,
    },
    // {
    //   title: "Foxglove Plant",
    //   img: Foxglove,
    // },
    {
        title: "Basil Plant",
        img: Basil,
      },
      {
        title: "House Plant",
        img: House,
      },
      {
        title: "Backlit Plant",
        img: Backlit,
      },
  ];
  const plantList = plantItems.map((item) => <Clay clay={item} />);
  return (
    <div>
        <Container>
        <Row> {plantList} </Row>
        </Container>
    </div>
  );
}
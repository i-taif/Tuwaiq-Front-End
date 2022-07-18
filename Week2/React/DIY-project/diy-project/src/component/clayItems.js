import React from "react";
import Clay from "./clay";
import Cup from "../images/cup.jpg";
import CupPlate from "../images/cup-plate.jpg";
import Face from "../images/face.jpg";
import Pot from "../images/pot.jpg";
import Jug from "../images/jug.jpg";
import WhiteJug from "../images/white-jug.jpg";

import {Row,Container} from "react-bootstrap";

// import courtneyCook from "../images/courtney-cook.jpg";
// import handmade from "../images/handmade.jpg";
// import handmade2 from "../images/handmade2.jpg";

export default function clayItems(props) {
  const clayItems = [
    {
      title: "كوب",
      img: Cup,
    },
    {
      title: "أواني",
      img: CupPlate,
    },
    {
      title: "حامل مجوهرات",
      img: Face,
    },
    {
        title: "ابريق",
        img: Jug,
      },
      {
        title: "أصيص",
        img: Pot,
      },
      {
        title: "فازة",
        img: WhiteJug,
      },
  ];
  const clayList = clayItems.map((item) => <Clay clay={item} />);
  return (
    <div>
        <Container>
        <Row> {clayList} </Row>
        </Container>
    </div>
  );
}
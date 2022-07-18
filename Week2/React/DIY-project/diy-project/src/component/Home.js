import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img1 from "../images/dolphin.jpeg";
import Img2 from "../images/animal.jpeg";
import Img3 from "../images/pica2.png";
import Img4 from "../images/Img4.jpg";
import Img5 from "../images/img5.webp";
import Img6 from "../images/img6.webp";
import Img7 from "../images/img7.webp";
import Img8 from "../images/img8.jpeg";
import Img9 from "../images/img9.webp";
import Color1 from "../images/color1.png";
import Color2 from "../images/color2.png";
import Color3 from "../images/color3.png";
import DIY from "../images/handmade2.png";

export default function Home() {
  return (
    <div className="centerG">
      <div className="Welcome">
        <Row>

          <Col>
        <h1 id="welcomeText">   يمكنك الآن البدأ بتشكيل الكثير من الافكار !</h1>
        </Col>
        <Col>
          <img src={DIY} id="DIY"/>
          </Col>
        </Row>
        </div>
      <div id="gallery">
        <img src={Img1} />
        <img src={Color1} />
        <img src={Img4} />
        <img src={Color3} />
        <img src={Img5} />
        <img src={Color2} />
        <img src={Img2} />
        <img src={Img6} />
        <img src={Img3} />
        <img src={Img8} />
        <img src={Img7} />
        <img src={Color3} />
        <img src={Color2} />
        <img src={Img9} />
        <img src={Color1}/>
      </div>
    </div>
  );
}
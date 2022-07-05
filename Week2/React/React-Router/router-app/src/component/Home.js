// import React, { useEffect, useState }  from "react";
import { Row, Container } from "react-bootstrap";
import Shows from "./showList";
import GOT from "../images/GOT.webp";
import Peaky from "../images/peaky.jpg";
import Succession from "../images/Succession.jpg";
import Witcher from "../images/witcher.jpg";
import Breaking from "../images/breaking-Bad.jpg";
import HTGAWM from "../images/HTGAWM.jpg";
import SUITS from "../images/suits.jpg";
import Friends from "../images/friends.jpg";

export default function Body(props) {
  const shows = [
    {
      title: "Game Of Thrones",
      story:
        "Seven noble families fight for control of the mythical land of Westeros.",
      year: "2011-2021",
      img: GOT,
    },
    {
      title: "Peaky Blinders",
      story: "A gangster family epic set in 1919 Birmingham,England",
      year: "2013-2022",
      img: Peaky,
    },
    {
      title: "Succession",
      story: "A drama about a dysfunctional media family dynasty ",
      year: "2018-Prsent",
      img: Succession,
    },
    {
      title: "The witcher",
      story: "a solitary monster hunter.",
      year: "2019-Prsent",
      img: Witcher,
    },
    {
      title: "Breaking Bad",
      story: "A chemistry teacher...",
      year: "2008-2013",
      img: Breaking,
    },
    {
      title: "How to Get Away with murder",
      story:
        "Brilliant criminal defense attorney and low professor Annalise Keating",
      year: "2014-2020",
      img: HTGAWM,
    },
    {
      title: "SUITS",
      story:
        "Brilliant criminal defense attorney and low professor Annalise Keating",
      year: "2011-2019",
      img: SUITS,
    },
    {
      title: "Friends",
      story: "...",
      year: "1994-2004",
      img: Friends,
    },
  ];
  // let [searsh,setSearch]=useState("")
  // let [movieSearch,setMovieSearch]=useState(movies)
  // let Change=(e)=>{
  //   console.log(e.target.value)
  //   setSearch(e.target.value)
  // }
  // useEffect(()=>{
  //  setMovieSearch(movies.filter((movie) => movie.title.toLowerCase().includes(searsh.toLowerCase())))
  // },[searsh])

  // const movieList = movieSearch.map((movies) => <Movie movi={movies} />);
  const showList = shows.map((show) => <Shows show={show} />);
  return (
    <div class="body">
      <Container>
        {/* <input placeholder='search'  onChange={Change}/>
        <button onClick={useEffect}>Search</button>  */}
        <Row> {showList}</Row>
      </Container>
      {/* <Container>
        <Row>
          <Col sm={8}>sm=8</Col>
          <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container> */}
    </div>
  );
}

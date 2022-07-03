import React from "react";
import Movie from "./movie.js";
import GOT from "../images/GOT.webp";
import Peaky from "../images/peaky.jpg";
import Succession from "../images/Succession.jpg";
import Witcher from "../images/witcher.jpg";
import Breaking from "../images/breaking-Bad.jpg";
import HTGAWM from "../images/HTGAWM.jpg";
import SUITS from "../images/suits.jpg";
import Friends from "../images/friends.jpg";

export default function Body() {
  const movies = [
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
  const movieList = movies.map((movie) => <Movie movie={movie} />);
  return <div class="body">{movieList}</div>;
}

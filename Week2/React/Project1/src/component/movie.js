import React from 'react'

export default function movies(props) {
  return (
    <div>
        <div class="movie">
        <img  src={props.movi.img} alt=""/>
        <div class="info">
        <p> <b>Show Title:</b> {props.movi.title}</p>
        {/* <p> <b>Show Story:</b> {props.movie.story}</p> */}
        <p> <b>Show Yere:</b> {props.movi.year}</p>
        <button> About Story </button>
        </div>
        </div>
    </div>
  )
}

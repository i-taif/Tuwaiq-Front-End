import React from 'react'

export default function movie(props) {
  return (
    <div>
        <div class="movie">
        <img  src={props.movie.img} alt=""/>
        <div class="info">
        <p> <b>Show Title:</b> {props.movie.title}</p>
        {/* <p> <b>Show Story:</b> {props.movie.story}</p> */}
        <p> <b>Show Yere:</b> {props.movie.year}</p>
        <button> About Story </button>
        </div>
        </div>
    </div>
  )
}

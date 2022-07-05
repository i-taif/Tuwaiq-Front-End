import React from 'react'
import {Card,Button,Col} from 'react-bootstrap'
export default function Home(props) {
  return (

    <Col sm={3} className='m-4'>
    <Card style={{ width: '20rem', color:'#F8F9FA' }} >
  <Card.Img  height={300} variant="top" src={props.show.img} />
  <Card.Body>
    <Card.Title>  {props.show.title}</Card.Title>
    <Card.Text>
    <b>Show Year:</b> {props.show.year}
    </Card.Text>
    <Button variant="light">About Story</Button>
  </Card.Body>
</Card>
</Col>


  )
}
// export default function movies(props) {
//   return (
//     <div>
//         <div class="movie">
//         <img  src={props.movi.img} alt=""/>
//         <div class="info">
//         <p> <b>Show Title:</b> {props.movi.title}</p>
//         {/* <p> <b>Show Story:</b> {props.movie.story}</p> */}
//         <p> <b>Show Yere:</b> {props.movi.year}</p>
//         <button> About Story </button>
//         </div>
//         </div>
//     </div>
//   )
// }


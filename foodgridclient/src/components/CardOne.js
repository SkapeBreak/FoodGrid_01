import React from 'react'
import { Card, Image } from 'react-bootstrap'
import image from '../images/peas.png'
import '../components/containers.css'


function CardOne() {
  return (
    <div class={{Card}} style={{width: "18rem"}}>
    <Image src={image} class="Img" alt="can't find img"/>
    <div class="card-body">
      <h5 class="card-title">Peas</h5>
      <p class="card-text">Canned Pease. I have a whole case. Reach out if interested!.</p>
      <a href="http://localhost:3000/listitems" class="btn btn-primary" style={{alignContent: "center"}}>See Item</a>
    </div>
  </div>
  
  
   
  
  )
}
export default CardOne






import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Image, Button } from 'react-bootstrap'
import image from '../images/peas.png'
import '../components/containers.css'


function CardOne() {
  return (
    
    <div class="Img">
    <div class={{Card}} style={{width: "18rem"}}>
    <Image src={image} class="Img" alt="can't find img"/>
    <div class="card-body">
      <h5 class="card-title">Peas</h5>
      <p class="card-text">You know you want these, for the green movement!</p>

        <LinkContainer to='/listitems'>
          <Button>Items</Button>
        </LinkContainer>

    </div>
  </div>
  </div>
  
  
   
  
  )
}
export default CardOne







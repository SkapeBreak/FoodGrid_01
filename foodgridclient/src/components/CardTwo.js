import React from 'react'
import { Card, Image, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import image from "../images/soup.jpg";
import '../components/containers.css'



function CardTwo () {
  return (
    <>
      <div class="Img">
    <div class={{Card}} style={{width: "18rem"}}>
    <Image src={image} class="Img" alt="can't find img"/>
    <div class="card-body">
      <h5 class="card-title">Canned goods</h5>
      <p class="card-text">Some extra cans left from camp. pick up near bowness</p>

        <LinkContainer to='/listitems'>
          <Button>Items</Button>
        </LinkContainer>

    </div>
  </div>
  </div>
    </>
  );
}

export default CardTwo






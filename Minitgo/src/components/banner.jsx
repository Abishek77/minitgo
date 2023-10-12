import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Add from './images/shop.jpg'; 
import { BiInfoCircle } from "react-icons/bi";

/* banner */
export default function Banner() {
  return (
    <>
   
     
<Container className='banner'>
  <Row>
    <div className="custom-bg ">
      <Col xs={6} sm={6} className='left-box '>
      <br></br>
        <h1 className='typing-text'>Get Delivery In <span className="" style={{color:'#5F6D79'}}> <br></br>Minutes</span> <span className='cursor'>&nbsp;</span></h1>
        <br></br>
        <Button className='buynow  '>Buy now</Button>
        <Button className='find-btn'>Find near me</Button>
         
        <p> <BiInfoCircle style={{fontSize:'10pt'}}/> Get the products from nearest & trusted stores</p>
         
      </Col>
      <Col xs={6} sm={6} className='right-box'>
        <img className="imgs" src={Add}  />
      </Col>
    </div>
  </Row>
</Container>
<br></br>
</>
  
  );
}

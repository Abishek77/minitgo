 
import { Container, Row, Col, Button } from 'react-bootstrap';
import Img from './images/best-deal1.jpg';
import Imgss from './images/best-deal2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';
import { BiInfoCircle } from "react-icons/bi";
import Shoe from './images/shoe.png';
import { Link } from 'react-router-dom';
const Slider = () => {
   
  return (
    <Container className='add-container'>
    <p className='p-2'>Sponsored <BiInfoCircle className='fa-1'/></p>
    <Row>
    <Link to="/products" className=' '>
        <Col className='col-sm-12 add sponsor d-flex justify-content-center align-items-center'>
          
         
        </Col>
        </Link>
      </Row>
  </Container>
 
  
  );
};

export default Slider;

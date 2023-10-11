 
import { Container, Row, Col } from 'react-bootstrap';
import Img from './images/best-deal1.jpg';
import Imgss from './images/best-deal2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';
import { BiInfoCircle } from "react-icons/bi";
import Shoe from './images/shoe.png';
import { Link } from 'react-router-dom';
const Slider = () => {
   
  return (
    <Container className=' .add-conatiner'>
        <p className='p-2'>Sponsored <BiInfoCircle className='fa-1'/></p>
    <Row>
  
        <Col className=' col-md-12 add sponsor'>
         
          {//<Link to="" className='btn btn-primary rounded-pill button mx-5 d-flex justify-content-center   '>Buy now</Link>
}
        </Col>
       
    </Row>
    <br></br>
    <br></br>
  </Container>
 
  
  );
};

export default Slider;

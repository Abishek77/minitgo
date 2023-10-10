 
import { Container, Row, Col } from 'react-bootstrap';
import Img from './images/best-deal1.jpg';
import Imgss from './images/best-deal2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';
import { BiInfoCircle } from "react-icons/bi";

const Slider = () => {
   
  return (
    <Container className=' .add-conatiner'>
        <p className='p-2'>Sponsored <BiInfoCircle className='fa-1'/></p>
    <Row>
  
        <div className='shadow add'>
        
          <Col className='col-md-6 '>
            
          </Col>

          <Col className='col-md6'>
             
          </Col>
        </div>
       
    </Row>
    <br></br>
    <br></br>
  </Container>
 
  
  );
};

export default Slider;

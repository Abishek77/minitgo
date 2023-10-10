import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../components/images/minitgo.png';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiCartAlt } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";  
import { BiMenuAltRight } from "react-icons/bi"; 
import Catlog from  './catlog.jsx';
 
import Offcanvas from 'react-bootstrap/Offcanvas'; // Import Offcanvas
function Header() {
  // State to manage the dropdown title
  const location = (
    <>
      <CiLocationArrow1 /> Hyderabad
    </>
  );
  const [dropdownTitle, setDropdownTitle] = useState(location);

  // Function to handle the dropdown item click
  const handleDropdownItemClick = (option) => {
    // Update the dropdown title based on the selected item
    setDropdownTitle(option);

  };
  // State to manage Offcanvas visibility
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  
 const login=(
  <span>
  <BiLogIn/> Signin
  </span>
 )
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className=" bg-light fixed-top shadow ">
      <Container>
        <Navbar.Brand><Link to='/'><img src={Logo}style={{width:'115px'}}/></Link></Navbar.Brand>
        <div className='mobile-menu-logo d-lg-none'>
      
       <Catlog/>
     
      </div>
      
        <BiMenuAltRight className='mobile-menu-logo d-lg-none' onClick={() => setShowOffcanvas(true)} />
      
         <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="me-auto">
            
            <NavDropdown  title={dropdownTitle} id="collasible-nav-dropdown" style={{border:'2.6px solid #d8dfab', borderRadius:'13px'}}>
              <NavDropdown.Item
                onClick={() => handleDropdownItemClick('Hyderabad')}
                
              >
                <FaLocationCrosshairs /> Hyderabad
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => handleDropdownItemClick('Mumbai')}
              >
                Mumbai
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleDropdownItemClick('Delhi')}
              >
                Delhi
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleDropdownItemClick('Banglore')}
              >
                Banglore
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form.Control
          style={{margin:'0 0px 0 32px'}}
              type="search"
              placeholder=" Ex: T-Shirt near me"
              className=" search-box"
              aria-label="Search"
            /><Form/> 
           <Button className=" search-btn" variant="outline-success">Go</Button>
         
          <Nav >
            
          <NavDropdown title={login}  id="collasible-nav-dropdown" className='Dropdown'>
          
              <NavDropdown.Item>
              <Link to="/register" className='text-decoration-none '>Create an account</Link>
                  
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/signin" className='text-decoration-none'>Login</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Link to="/register" className='text-decoration-none '>Minit-Pay </Link>
                
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/register" className='text-decoration-none '> Address change </Link>
               
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/register" className='text-decoration-none '> Settings  </Link>
                 
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2}>
              <Link to='/orders' className='text-decoration-none text-dark'>Orders</Link> 
            </Nav.Link> 
          
             
            <Link to="/cart" className='text-secondary' style={{fontSize:'33px', margin:'-5.8% 0 0 0'}}><BiCartAlt/></Link>
          </Nav>
        </Navbar.Collapse>
  
      </Container>
      <div className='mobile-menu-logo d-lg-none'>
    <div className='mobile-search'>
      <Form.Control
          
              type="search"
              placeholder=" Ex: T-Shirt near me"
              className="search-box-m"
              aria-label="Search"
            /><Form/> 
           <Button className=" search-btn" variant="outline-success">Go</Button>
         
           </div>
     </div>
    </Navbar>
    <Catlog/>
     

   {/* Offcanvas Sidebar */}
   <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Minitgo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Sidebar content goes here */}
          <Nav className="flex-column">
            <Nav.Link>Create an account</Nav.Link>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Minit-Pay</Nav.Link>
            <Nav.Link>Address change</Nav.Link>
            <Nav.Link>Settings</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      

      
    </>
  );
}

export default Header;

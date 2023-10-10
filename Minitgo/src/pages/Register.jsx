import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
 
import Logo from '../components/images/minitgo.png'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [townDistrict, setTownDistrict] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    // You can send the form data to the server or perform any other actions
    console.log('Form submitted!');
  };

  const handleUseCurrentLocation = () => {
    // Use browser geolocation API to get the current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=AIzaSyCMG4GzxbEmqfSZ-uaDOhF55sgxi9sumc4`
            ); // Replace 'YOUR_API_KEY' with your actual API key
            const data = await response.json();
            if (data.results.length > 0) {
              const { components } = data.results[0];
              setAddress(components.road || '');
              setCity(components.city || components.town || components.village || '');
              setPincode(components.postcode || '');
              setTownDistrict(components.town || components.district || '');
              setState(components.state || '');
            }
          } catch (error) {
            console.log('Geocoding error:', error);
          }
        },
        (error) => {
          console.log('Geolocation error:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  return (
    <>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="registration-form bg-white p-4 rounded shadow">
       <img className='logo-r sm-3 w-25' src={Logo}/>
       <h5>Create new account</h5>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            
            <Col>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            
            <Col>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Phone </Form.Label>
            <Row className="align-items-center">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="+91"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Col>
              <Col>
                <Button variant="secondary" onClick={handleUseCurrentLocation}>
                  Use Current Location
                </Button>
              </Col>
            </Row>
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="city">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Appart: /House: /Flat: "
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="pincode">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="townDistrict">
                <Form.Label>Town/District</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your town/district"
                  value={townDistrict}
                  onChange={(e) => setTownDistrict(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Register
          </Button>
          <a href="/signin" className="forgot-password-link">
                     Back to login
                  </a>
        </Form>
      </div>
      
    </div>
   
    </>
  );

};

export default Register;

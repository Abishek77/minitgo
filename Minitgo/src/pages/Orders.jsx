import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from '../components/header'
import { BiCartDownload } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
 
const imgwidth ={
 width:'75%',
 height:'55vh',
 marginLeft:'7%',
 padding:'20px'
}
const OrdersPage = () => {
  const orders = [
    {
      id: 1,
      name: 'Product A',
      description: 'This is the description for Product A.',
      price: 10.99,
      image: 'https://m.media-amazon.com/images/I/71nxs7jjPFL._AC_UF1000,1000_QL80_.jpg',
      deliveryStatus: 'delivered',
      deliveryDate: new Date('2023-07-10'),
    },
    {
      id: 2,
      name: 'Product B',
      description: 'This is the description for Product B.',
      price: 19.99,
      image: 'https://freepngimg.com/save/2123-black-dress-shirt-png-image/879x1216',
      deliveryStatus: 'delivered',
      deliveryDate: new Date('2023-07-12'),
    },
    {
      id: 3,
      name: 'Product C',
      description: 'This is the description for Product C.',
      price: 14.99,
      image: 'https://media.boohoo.com/i/boohoo/gzz45061_black_xl/womens-black-the-printed-midi-shirt-dress/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      deliveryStatus: 'delivered',
      deliveryDate: new Date('2023-07-15'),
    },
    {
      id: 4,
      name: 'Product D',
      description: 'This is the description for Product D.',
      price: 9.99,
      image: 'https://www.pngarts.com/files/4/Dress-Shirt-PNG-Transparent-Image.png',
      deliveryStatus: 'pending',
      estimatedDeliveryTime: 120,
    },
  ];

  const [deliveryTimeRemaining, setDeliveryTimeRemaining] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setDeliveryTimeRemaining((prevRemaining) => {
        const updatedRemaining = { ...prevRemaining };
        Object.keys(updatedRemaining).forEach((orderId) => {
          updatedRemaining[orderId] = Math.max(updatedRemaining[orderId] - 1000, 0);
        });
        return updatedRemaining;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleDeliveryTimeChange = (orderId, minutes) => {
    const updatedRemaining = { ...deliveryTimeRemaining };
    updatedRemaining[orderId] = minutes * 60 * 1000;
    setDeliveryTimeRemaining(updatedRemaining);
  };

  const canReturnOrder = (deliveryDate) => {
    if (!deliveryDate) return false;
    const currentDate = new Date();
    const returnDate = new Date(deliveryDate.getTime() + 5 * 24 * 60 * 60 * 1000); // 5 days later
    return currentDate <= returnDate;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / (60 * 1000));
    return `${minutes} minutes`;
  };

  return (
    <>
      <Header />
      <Container>
        <h1 className="mt-4 mb-5 text-dark "><BiCartDownload/>Orders </h1>
        <Row className="justify-content-center">
          {orders.map((order) => (
            <Col key={order.id} md={4} sm={6} xs={12} className="mb-4">
              <Card className="h-100 shadow border border-primary ">
                {order.deliveryStatus === 'delivered' && order.deliveryDate && (
                  <span className='text-danger ' style={{backgroundColor:'#d9dfab', width:'90px', padding:'1px', borderRadius:'2px', marginBottom:'0px'}}>Delivered<span><BiCheckCircle/></span></span>
                )}
                <Card.Img style={imgwidth} variant="top" src={order.image} />
                <Card.Body className="d-flex flex-column">
                  <div>
                    <Card.Title>{order.name}</Card.Title>
                    <Card.Text>{order.description}</Card.Text>
                    <Card.Text>Total Amount: {order.price}</Card.Text>
                    {order.deliveryStatus === 'delivered' && order.deliveryDate && (
                      <Card.Text>Delivery Status: Delivered</Card.Text>
                    )}
                    {order.deliveryStatus === 'pending' && order.estimatedDeliveryTime && (
                      <Card.Text>
                        Estimated Delivery Time: {formatTime(order.estimatedDeliveryTime)}
                      </Card.Text>
                    )}
                  </div>
                  <div className="mt-auto">
                    {order.deliveryStatus === 'delivered' && order.deliveryDate && (
                      <>
                        {canReturnOrder(order.deliveryDate) ? (
                          <Button variant="warning" className="mb-2">
                            Return
                          </Button>
                        ) : (
                          <Button variant="secondary" className="mb-2" disabled>
                            Return
                          </Button>
                        )}
                      </>
                    )}
                    {order.deliveryStatus === 'pending' && order.estimatedDeliveryTime && (
                      <>
                        {deliveryTimeRemaining[order.id] ? (
                          <Card.Text>
                            Time remaining: {formatTime(deliveryTimeRemaining[order.id])}
                          </Card.Text>
                        ) : (
                          <Button variant="primary" className="mr-2 mb-2">
                            Track Order
                          </Button>
                        )}
                        <Button variant="secondary" className="mb-2">Give Feedback</Button>
                      </>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
    </>
  );
};

export default OrdersPage;

import React, { useState } from "react";
import { Container, Button, Row, Col, Card, Carousel } from "react-bootstrap";
import "../components/CardSlider.css"; // Import your custom CSS file for styling

function CardSlider() {
  const cardData = [
    {
      title: "Product 1",
      price: "$19.99",
      image: "image1.jpg",
    },
    {
      title: "Product 1",
      price: "$19.99",
      image: "image1.jpg",
    },
    {
      title: "Product 2",
      price: "$19.99",
      image: "image2.jpg",
    },
    {
      title: "Product 3",
      price: "$19.99",
      image: "image3.jpg",
    },
    {
      title: "Product 4",
      price: "$19.99",
      image: "image4.jpg",
    },
    {
      title: "Product 1",
      price: "$19.99",
      image: "image1.jpg",
    },
    {
      title: "Product 1",
      price: "$19.99",
      image: "image1.jpg",
    },
    {
      title: "Product 2",
      price: "$19.99",
      image: "image2.jpg",
    },
    {
      title: "Product 3",
      price: "$19.99",
      image: "image3.jpg",
    },
    {
      title: "Product 4",
      price: "$19.99",
      image: "image4.jpg",
    },
    // Add more products as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  // Function to render individual product cards
  const renderProductCard = (product) => {
    return (
      
      <Card className="product-card shadow">
        <Card.Img className ="product-image" variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    );
  };

  // Function to split the card data into groups of 4
  const splitCardData = () => {
    const result = [];
    for (let i = 0; i < cardData.length; i += 4) {
      result.push(cardData.slice(i, i + 4));
    }
    return result;
  };

  return (
    <>
  <br></br>
  <br></br>
  <br></br>

    <Container className="card-slider ">
    <Row>
      <Col>
        <Carousel
          activeIndex={activeIndex}
          onSelect={handleSelect}
          prevLabel={
          <span style={{ color: "black", fontSize: "24px" }}>{'<'}</span>
           
          }
          nextLabel={
            <span style={{ color: "black", fontSize: "24px" }}>{'>'}</span>
          }
          indicators={true}
          interval={null} 
        >
          {splitCardData().map((group, index) => (
            <Carousel.Item key={index}>
              <Row>
                {group.map((product, i) => (
                  <Col key={i}>{renderProductCard(product)}</Col> 
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  </Container>
  <br></br>
  <br></br>
  <br></br>
  </>
  );
}

export default CardSlider;

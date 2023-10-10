import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs';

const ProductsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedDistanceRange, setSelectedDistanceRange] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [matchingKeywords, setMatchingKeywords] = useState([]);
  const [searchableWords, setSearchableWords] = useState([]);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleDistanceRangeChange = (event) => {
    setSelectedDistanceRange(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Find matching keywords from products
    const keywords = products
      .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
      .map((product) => product.name);
    setMatchingKeywords(keywords);
  };

  const handleKeywordClick = (keyword) => {
    setSearchQuery(keyword);
    setMatchingKeywords([]);
  };

  const handleGo = () => {
    const newFilteredProducts = products.filter((product) => {
      const matchesFilter =
        (selectedFilter === '' || product.category === selectedFilter) &&
        (selectedPriceRange === '' || product.price <= parseInt(selectedPriceRange)) &&
        (selectedDistanceRange === '' || product.distance <= parseInt(selectedDistanceRange)) &&
        (product.name.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter;
    });
    setFilteredProducts(newFilteredProducts);
  };

  const handleBuyNow = (productId) => {
    // Handle buy now functionality for the selected product
    console.log(`Buy Now: Product ${productId}`);
  };

  const handleAddToCart = (productId) => {
    // Handle add to cart functionality for the selected product
    const updatedCartItems = [...cartItems, productId];
    setCartItems(updatedCartItems);
  };

  // Example product data
  const products = [
    { id: 1, name: 'Product 1', category: 'Category A', price: 10, distance: 5 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 20, distance: 10 },
    { id: 3, name: 'Product 3', category: 'Category A', price: 15, distance: 8 },
    { id: 4, name: 'Product 4', category: 'Category C', price: 25, distance: 15 },
    // Add more product data
  ];

  return (
    <Container>
      <h1>Products</h1>
      <Row>
        <Col md={2}>
          <div className="filters">
            <h5>Filters</h5>
            <Form.Group controlId="distanceRangeForm">
              <Form.Label>Distance Range:</Form.Label>
              <Form.Control as="select" value={selectedDistanceRange} onChange={handleDistanceRangeChange}>
                <option value="">Any</option>
                <option value="5">Up to 5 miles</option>
                <option value="10">Up to 10 miles</option>
                <option value="15">Up to 15 miles</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="filterForm">
              <Form.Label>Category:</Form.Label>
              <Form.Control as="select" value={selectedFilter} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Category A">Category A</option>
                <option value="Category B">Category B</option>
                <option value="Category C">Category C</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="priceRangeForm">
              <Form.Label>Price Range:</Form.Label>
              <Form.Control as="select" value={selectedPriceRange} onChange={handlePriceRangeChange}>
                <option value="">Any</option>
                <option value="10">Up to $10</option>
                <option value="20">Up to $20</option>
                <option value="30">Up to $30</option>
              </Form.Control>
            </Form.Group>
          
            <Form.Group controlId="searchForm">
              <Form.Label>Search:</Form.Label>
              <Form.Control type="text" placeholder="Search products" value={searchQuery} onChange={handleSearchQueryChange} />
              {matchingKeywords.length > 0 && (
                <ListGroup className="matching-keywords">
                  {matchingKeywords.map((keyword) => (
                    <ListGroup.Item key={keyword} onClick={() => handleKeywordClick(keyword)}>
                      {keyword}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Form.Group>
            <Button variant="primary" onClick={handleGo}>
              Go
            </Button>
          </div>
        </Col>
        <Col md={9}>
          <div className="product-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="product">
                  <h5>{product.name}</h5>
                  <p>{product.category}</p>
                  <Button variant="primary" onClick={() => handleBuyNow(product.id)}>
                    Buy Now
                  </Button>
                  <Button variant="secondary" onClick={() => handleAddToCart(product.id)}>
                    Add to Cart
                  </Button>
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </Col>
      </Row>
      <div className="cart-icon">
        <BsCart3 size={30} />
        {cartItems.length > 0 && <span className="item-count">{cartItems.length}</span>}
      </div>
    </Container>
  );
};

export default ProductsPage;

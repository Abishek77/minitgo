import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { BiInfoCircle } from "react-icons/bi";
import { FaStore } from "react-icons/fa6";  
import { BiSolidCategory } from "react-icons/bi";  
import { FaLocationDot } from "react-icons/fa6"; 

import Ban from './images/product.png'
const HomeProducts = () => {
return(
<>
<div class="container">
    <h3> <BiSolidCategory className='fs-2 p-1'/>Top Category's</h3>
  <div class="row">
    <div class="col-6 col-md-3">
      <div class="subs-cat">
        <h4>Men's Fashion</h4>
        <button class="btn btn-outline-light rounded-pill">Shop Now</button>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="subs-cat-2">
        <h4>Women Fashion</h4>
        <button class="btn btn-outline-light rounded-pill">Shop Now</button>
      </div>
    </div>
    <div class=" col-6 col-md-3">
      <div class="subs-cat-3">
        <h4>Fashion Accessories</h4>
        <button class="btn btn-outline-light rounded-pill">Shop Now</button>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="subs-cat-4">
        <h4>Kitchen</h4>
        <button class="btn btn-outline-light rounded-pill">Shop Now</button>
      </div>
    </div>
  </div>
</div>
<br></br>
<div class="container">
        <h3><FaLocationDot className='fs-2 p-1'/>Nearby You </h3>
        <div class="row">
           
            <div class="col-md-2 filter-s ">
              <div className='shadow filter-bg'>
                <form>
                    <div class="form-group ">
                        <h6 for="distanceFilter">Filter</h6>
                        <label for="priceFilter">Distance</label>

                        <select class="form-control rounded-pill" id="distanceFilter">
                            <option value="">All</option>
                            <option value="5 miles">5 miles</option>
                            <option value="10 miles">10 miles</option>
                            
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="priceFilter">Set Price</label>
                        <select class="form-control rounded-pill" id="priceFilter">
                            <option value="">All</option>
                            <option value="$10.99">$10.99</option>
                            <option value="$19.99">$19.99</option>
                       
                        </select>
                    </div>
                </form>
                </div>
            </div>
             
            <div class="col-md-10">
                <div class="row">
                     
                    <div class="col-6 col-sm-3 py-2">
                        <div class="product-card ">
                            <div class="product-image">
                                <img src={Ban}   alt="Product 1"/>
                               
      
                             <div class="offer-tag bg-warning rounded-pill text-center p-1 text-light" >25% Off</div>
       
   
                            </div>
                            <div className='product-content'>
                            <h6>T-Shirt | Nexa Brand | color: white | other content </h6>
                            <h5>Price: <sup>&#x20B9;</sup>399<span className='text-decoration-line-through text-muted fs-6 fw-light'>599</span>
                            <span className='text-muted' style={{fontSize:'13px'}}> In-Stock</span></h5>
                            <p class="product-rating text-warning">
                                Rating: &#9733;&#9733;&#9733;&#9733;&#9734;  
                            </p>
                            <p class="product-distance text-secondary ">
                               Distance: 5km away.
                            </p>
                            
                            
                            </div>
                        </div>
                    
                    </div>
                    <div class="col-6 col-sm-3 py-2">
                        <div class="product-card">
                            <div class="product-image">
                                <img src={Ban}   alt="Product 1"/>
                               
      
                             <div class="offer-tag bg-warning rounded-pill text-center p-1 text-light" >25% Off</div>
       
   
                            </div>
                            <div className='product-content'>
                            <h6>T-Shirt | Nexa Brand | color: white | other content </h6>
                            <h5>Price: <sup>&#x20B9;</sup>399<span className='text-decoration-line-through text-muted fs-6 fw-light'>599</span></h5>
                            <p class="product-rating text-warning">
                                Rating: &#9733;&#9733;&#9733;&#9733;&#9734;  
                            </p>
                            <p class="product-distance text-secondary ">
                               Distance: 5km away.
                            </p>
                            
                            
                            </div>
                        </div>
                    
                    </div>
                    <div class="col-6 col-sm-3 py-2">
                        <div class="product-card">
                            <div class="product-image">
                                <img src={Ban}   alt="Product 1"/>
                               
      
                             <div class="offer-tag bg-warning rounded-pill text-center p-1 text-light" >25% Off</div>
       
   
                            </div>
                            <div className='product-content'>
                            <h6>T-Shirt | Nexa Brand | color: white | other content </h6>
                            <h5>Price: <sup>&#x20B9;</sup>399<span className='text-decoration-line-through text-muted fs-6 fw-light'>599</span></h5>
                            <p class="product-rating text-warning">
                                Rating: &#9733;&#9733;&#9733;&#9733;&#9734;  
                            </p>
                            <p class="product-distance text-secondary ">
                               Distance: 5km away.
                            </p>
                            
                            
                            </div>
                        </div>
                    
                    </div><div class="col-6 col-sm-3 py-2">
                        <div class="product-card">
                            <div class="product-image">
                                <img src={Ban}   alt="Product 1"/>
                               
      
                             <div class="offer-tag bg-warning rounded-pill text-center p-1 text-light" >25% Off</div>
       
   
                            </div>
                            <div className='product-content'>
                            <h6>T-Shirt | Nexa Brand | color: white | other content </h6>
                            <h5>Price: <sup>&#x20B9;</sup>399<span className='text-decoration-line-through text-muted fs-6 fw-light'>599</span></h5>
                            <p class="product-rating text-warning">
                                Rating: &#9733;&#9733;&#9733;&#9733;&#9734;  
                            </p>
                            <p class="product-distance text-secondary ">
                               Distance: 5km away.
                            </p>
                            </div>
                        </div>
                    
                    </div><div class="col-6 col-sm-3 py-2">
                        <div class="product-card">
                            <div class="product-image">
                                <img src={Ban}   alt="Product 1"/>
                               
      
                             <div class="offer-tag bg-warning rounded-pill text-center p-1 text-light" >25% Off</div>
       
   
                            </div>
                            <div className='product-content'>
                            <h6>T-Shirt | Nexa Brand | color: white | other content </h6>
                            <h5>Price: <sup>&#x20B9;</sup>399<span className='text-decoration-line-through text-muted fs-6 fw-light'>599</span></h5>
                            <p class="product-rating text-warning">
                                Rating: &#9733;&#9733;&#9733;&#9733;&#9734;  
                            </p>
                            <p class="product-distance text-secondary ">
                               Distance: 5km away.
                            </p>
                            
                            
                            </div>
                        </div>
                    
                    </div>
                    <div class="col-6 col-sm-3 py-2">
                        <div class="product-card">
                            <div class="product-image">
                                <img src={Ban}   alt="Product 1"/>
                               
      
                             <div class="offer-tag bg-warning rounded-pill text-center p-1 text-light" >25% Off</div>
       
   
                            </div>
                            <div className='product-content'>
                            <h6>T-Shirt | Nexa Brand | color: white | other content </h6>
                            <h5>Price: <sup>&#x20B9;</sup>399<span className='text-decoration-line-through text-muted fs-6 fw-light'>599</span></h5>
                            <p class="product-rating text-warning">
                                Rating: &#9733;&#9733;&#9733;&#9733;&#9734;  
                            </p>
                            <p class="product-distance text-secondary ">
                               Distance: 5km away.
                            </p>
                            
                            
                            </div>
                        </div>
                    
                    </div>
                    <div class="col-6 col-sm-3 py-2">
                        <div class="product-card">
                            <div class="product-image">
                                <img src={Ban}   alt="Product 1"/>
                               
      
                             <div class="offer-tag bg-warning rounded-pill text-center p-1 text-light" >25% Off</div>
       
   
                            </div>
                            <div className='product-content'>
                            <h6>T-Shirt | Nexa Brand | color: white | other content </h6>
                            <h5>Price: <sup>&#x20B9;</sup>399<span className='text-decoration-line-through text-muted fs-6 fw-light'>599</span></h5>
                            <p class="product-rating text-warning">
                                Rating: &#9733;&#9733;&#9733;&#9733;&#9734;  
                            </p>
                            <p class="product-distance text-secondary ">
                               Distance: 5km away.
                            </p>
                            
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
     
</>
);

}

export default HomeProducts;

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { BiMenuAltLeft } from "react-icons/bi";
 // Import the CSS file for animations
 import Dropdown from 'react-bootstrap/Dropdown';
 import { FaStore } from "react-icons/fa6";
 import { HiOutlineCurrencyRupee } from "react-icons/hi2";
 
export default function Catlog() {
  return (
    <div className="catlog fixed-top filter">
      
      
        <ul className="catlog-names">
        <li className="nav-link cat-nav" style={{fontSize:'15pt'}}><FaStore/> </li>
         
          <li className="nav-link cat-nav">  
          <Dropdown>
       <Dropdown.Toggle variant="light" id="dropdown-basic" className=" rounded-pill set-range">
         Set Search Range
       </Dropdown.Toggle>
 
       <Dropdown.Menu>
         <Dropdown.Item href="#/action-1">Distance 8<sup>km</sup></Dropdown.Item>
         <Dropdown.Item href="#/action-2">Distance 12<sup>km</sup></Dropdown.Item>
         <Dropdown.Item href="#/action-3">Distance 20<sup>km</sup></Dropdown.Item>
         <Dropdown.Item href="#/action-3">Distance 25<sup>km</sup></Dropdown.Item>
         <Dropdown.Item href="#/action-3">More than 25<sup>km</sup></Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
</li>
         
        </ul>
      
    </div>
  );
}

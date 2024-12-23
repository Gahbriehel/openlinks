import React from 'react'
import './nav.css'
import './about.css'
import { FaLaptop } from "react-icons/fa";
import { GiMagnifyingGlass, GiShoppingCart } from "react-icons/gi";




const About = () => {
  return (
    <div className='about_container'>
      <div className='about_section1'>
        <h1>OUR STORY</h1>
        <img src='images/laptop3.jpg' alt='laptop3'></img>
      </div>
      <div className='about_section2'>
        <h1>technology is our mission</h1>
        <p>We're a modern platform dedicated to transforming how people discover, compare, and purchase laptops.</p>
        <div className='offerings'>
          <div className='offer1'>
            <p className='offer_icon'><FaLaptop/></p>
            <p>WIDEST SELECTION</p>
          </div>
          <div className='offer2'>
            <p className='offer_icon'><GiMagnifyingGlass/></p>
            <p>QUALITY INFORMATION</p>
          </div>
          <div className='offer3'>
            <p className='offer_icon'><GiShoppingCart/></p>
            <p>AFFORDABLE OPTIONS</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
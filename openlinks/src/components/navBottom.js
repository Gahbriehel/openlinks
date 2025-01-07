import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosLaptop, IoMdPricetag, IoMdHome } from "react-icons/io";
import { MdOutlineCategory, MdFilterAlt } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBottom = () => {
  return (
    <div className='nav_bottom'>
    <ul>
        <li><Link to='/' className='link'><IoMdHome />Home</Link></li>
        <li><Link to='/brands' disabled className='link'><IoIosLaptop /> Laptop Brands</Link></li>
        <li><Link to='/categories' className='link'><MdOutlineCategory /> Categories  <RiArrowDropDownLine /></Link></li>
        <li><Link to='/price_range' className='link'><ImPriceTags /> Price Range  <RiArrowDropDownLine /></Link></li>
        <li><Link to='/specific' className='link'><MdFilterAlt /> Specific  <RiArrowDropDownLine /></Link></li>
        <li><Link to='/sale' className='link'><IoMdPricetag /> SALE</Link></li>
        <li><Link to='/about' className='link'>About</Link></li>
        <li><Link to='/contact' className='link'>Contact Us</Link></li>
    </ul>
</div>
  )
}

export default NavBottom
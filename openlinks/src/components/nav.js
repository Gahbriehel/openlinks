import React from 'react'
import { Link } from "react-router-dom";
import './nav.css'
import { FaSearch } from 'react-icons/fa';
import { IoMdHome } from "react-icons/io";
import { IoIosLaptop } from "react-icons/io";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { MdFilterAlt } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";









const Nav = () => {
    return (
        <>
            <div className='nav_container'>
                <div className='nav_top'>
                    <div className='logo'>
                        <img src='images/profile.png' alt='logo'></img>
                    </div>
                    <div className='search_box'>
                        <input type='text' value='' placeholder='Search'></input>
                        <button><FaSearch /></button>
                    </div>
                    <div className='cart_btn'>
                        <button>View Cart</button>
                    </div>
                </div>
                <hr></hr>
                <div className='nav_bottom'>
                    <ul>
                        <li><Link to='/' className='link'><IoMdHome />Home</Link></li>
                        <li><Link to='/brands' className='link'><IoIosLaptop />Laptop Brands</Link></li>
                        <li><Link to='/recommendations' className='link'><FaRankingStar />Recommendations</Link></li>
                        <li><Link to='/categories' className='link'><MdOutlineCategory />Categ</Link></li>
                        <li><Link to='/price_range' className='link'><ImPriceTags />Price Range</Link></li>
                        <li><Link to='/specific' className='link'><MdFilterAlt />Specific</Link></li>
                        <li><Link to='/sale' className='link'><IoMdPricetag />SALE</Link></li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav
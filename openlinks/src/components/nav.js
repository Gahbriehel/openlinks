import React from 'react'
import { Link } from "react-router-dom";
import './nav.css'
import { FaSearch } from 'react-icons/fa';
import { MdPersonOutline, MdOutlineShoppingCart } from "react-icons/md";
import NavBottom from './navBottom';

// import { FaRankingStar } from "react-icons/fa6";




const Nav = () => {
    return (
        <>
            <div className='nav_container'>
                <div className='nav_top'>
                    <div className='logo'>
                        <Link to='/'><img src='images/profile.png' alt='logo'></img></Link>
                    </div>
                    <div className='search_box'>
                        <input type='text' /* value='' */ placeholder='Search'></input>
                        <button><FaSearch /></button>
                    </div>
                    <div className='nav_top_right'>
                        <div className='account'>
                            <button><MdPersonOutline className='account_icon' /> Sign In</button>
                        </div>
                        <div className='cart_btn'>
                            <button><MdOutlineShoppingCart className='cart_icon' /> Cart</button>
                        </div>

                    </div>
                </div>
                <hr></hr>
               <NavBottom />
            </div>
        </>
    )
}

export default Nav
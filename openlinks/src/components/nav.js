import React from 'react'
import { Link } from "react-router-dom";
import './nav.css'
import { FaSearch } from 'react-icons/fa';
import { MdPersonOutline, MdOutlineShoppingCart, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
import NavBottom from './navBottom';
import { useSelector } from 'react-redux';


const Nav = () => {
    const cartData = useSelector(state => state.cart) 
    const userData = useSelector(state => state.user.user)
    // const userFirstName = userData.user.name.split(' ') || null
    // console.log("user first name:" ,userFirstName);
    


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
                            {userData ? (
                                <div className='account_info'>
                                    <input type='checkbox'></input>
                                    {/* <label><span><BsPersonCheck /></span>Hi, {userFirstName} <MdOutlineKeyboardArrowDown /></label> */}
                                    <div className='account_box'>
                                        <div className='box'>
                                            <Link to='/profile' className='cart_link'><p className='account_text'>My account</p></Link>
                                            <Link to='/' className='cart_link'><p className='account_text'>Saved items</p></Link>
                                            <form method='POST' action='/logout'>
                                                <button type='submit'>Log out</button>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <button><BsPersonCheck className='account_icon' /> Hi, {userData.user.name}</button> */}
                                </div>
                            ) : (
                                <Link to='/signup' className='cart_link'><button><MdPersonOutline className='account_icon' /> Sign In</button></Link>
                            )}
                        </div>
                        <div className='cart_btn'>
                            <Link to='/cart' className='cart_link'><button><MdOutlineShoppingCart className='cart_icon' /> Cart {cartData.number > 0 && <span><sup>({cartData.number})</sup></span>}</button></Link>
                        </div>
                    </div>
                </div>
                <hr />
                <NavBottom />
            </div>
        </>
    )
}

export default Nav
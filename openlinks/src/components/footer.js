import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";



const Footer = () => {
    return (
        <>
            <div className='footer_container'>
                <div className='footer_top'>
                    <p>Stay up-to-date with the latest laptops and deals! Subscribe to our newsletter now!</p>
                    <input type='text' placeholder='Enter your email'></input>
                    <button>Subscribe</button>
                </div>
                <hr></hr>
                <div className='footer_bottom'>
                    <div className='footer_bottom_left'>
                        <div className='logo'>
                            <Link to='/'><img src='images/profile.png' alt='logo'></img></Link>
                        </div>
                        <div className='socials'>
                            <Link><FaLinkedin /></Link>
                            <Link><BsTwitterX /></Link>
                            <Link><FaInstagram /></Link>
                        </div>
                    </div>
                    <div className='footer_bottom_right'>
                        <div className='footer_col_1'>
                            <h6>help center</h6>
                            <p>FAQs</p>
                            <p>customer support</p>
                            <p>how to buy a laptop</p>
                        </div>
                        <div className='footer_col_2'>
                            <h6>about us</h6>
                            <p>privacy policy</p>
                            <p>sitemap</p>
                            <p>subscriptions</p>
                        </div>
                        <div className='footer_col_3'>
                        <p>support@openlinkstech</p>
                        <p>+234 123 456 789</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
import React from 'react'
import { Link } from "react-router-dom";
import './nav.css'
import './contactUs.css'
import { FaAngleRight } from "react-icons/fa";
import { PiPackage } from "react-icons/pi";
import { RiVerifiedBadgeLine, RiSecurePaymentFill } from "react-icons/ri";
import ControlledComponent from './contactForm'



const ContactUs = () => {
    return (
        <>
            <div className='contact_container'>
                <div className='contact_container_top'>
                    <div className='get_in_touch'>
                        <h1>Get in Touch</h1>
                        <p>We want to hear from you. Please feel free to email Orders@OpenLinks.com or fill out the form below. Please allow 1-3 business days to respond.</p>
                        <div className='get_in_touch_btns'>
                            <Link className='link' to='/wholesale'><button>wholesale</button></Link>
                            <Link className='link' to='customOrders'><button>custom orders</button></Link>
                            <Link className='link' to='shippingInfo'><button>shipping info</button></Link>
                        </div>
                    </div>
                    <div className='faq_links'>
                        <ul>
                            <li>
                                <Link className='link'>
                                    <article>
                                        <h5>😥 I need help with an order</h5>
                                        <p><FaAngleRight /></p>
                                    </article>
                                </Link>
                            </li>
                            <li>
                                <Link className='link'>
                                    <article>
                                        <h5>🧰 My laptop arrived damaged, what should I do?</h5>
                                        <p><FaAngleRight /></p>
                                    </article>
                                </Link>
                            </li>
                            <li>
                                <Link className='link'>
                                    <article>
                                        <h5>🚚 How do I locate my shipment?</h5>
                                        <p><FaAngleRight /></p>
                                    </article>
                                </Link>
                            </li>
                            <li>
                                <Link className='link'>
                                    <article>
                                        <h5>💻 What are the system requirements for my laptop?</h5>
                                        <p><FaAngleRight /></p>
                                    </article>
                                </Link>
                            </li>
                            <li>
                                <Link className='link'>
                                    <article>
                                        <h5>🤔 Which model is best for me?</h5>
                                        <p><FaAngleRight /></p>
                                    </article>
                                </Link>
                            </li>
                            <li>
                                <Link className='link'>
                                    <article>
                                        <h5>🔙 What's your return policy?</h5>
                                        <p><FaAngleRight /></p>
                                    </article>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='contact_container_mid'>
                    <h1>Form goes here</h1>
                    <ControlledComponent/>
                </div>
                <div className='contact_container_bottom'>
                    <div className='join_newsletter'>
                        <h1>Join our newsletter</h1>
                        <p>Stay up-to-date with new collections and deals.</p>
                        <div className='newsletter_input'>
                            <input type='email' placeholder='Your email'></input>
                            <button>Send</button>
                        </div>
                    </div>
                    <div className='contact_container_bottom2'>
                        <div className='newsletter_perks'>
                            <div className='perk'>
                                <div className='perk_icon'>
                                    <PiPackage />
                                </div>
                                <div className='perk_text'>
                                    <h5>Free shipping</h5>
                                    <p>Local orders above ₦200k</p>
                                </div>
                            </div>
                            <div className='perk'>
                                <div className='perk_icon'>
                                    <RiVerifiedBadgeLine />
                                </div>
                                <div className='perk_text'>
                                    <h5>2 Year Warranty</h5>
                                    <p>On Every Product</p>
                                </div>
                            </div>
                            <div className='perk'>
                                <div className='perk_icon'>
                                    <RiSecurePaymentFill />
                                </div>
                                <div className='perk_text'>
                                    <h5>Secure Checkout</h5>
                                    <p>Enhanced Payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
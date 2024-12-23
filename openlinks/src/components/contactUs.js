import React from 'react'
import './nav.css'
import './contactUs.css'
import { FaAngleRight } from "react-icons/fa";



const ContactUs = () => {
    return (
        <>
        <div className='contact_container'>
            <div className='contact_container_top'>
                <div className='get_in_touch'>
                    <h1>Get in Touch</h1>
                    <p>We want to hear from you. Please feel free to email Orders@OpenLinks.com or fill out the form below. Please allow 1-3 business days to respond.</p>
                    <div className='get_in_touch_btns'>
                        <button>wholesale</button>
                        <button>custom orders</button>
                        <button>shipping info</button>
                    </div>
                </div>
                <div className='faq_links'>
                    <ul>
                        <li><a href=''><article><h5>😥 I need help with an order</h5> <span><FaAngleRight/></span></article></a></li>
                        <li><a><article><h5>🧰 My laptop arrived damaged, what should I do?</h5> <span><FaAngleRight/></span></article></a></li>
                        <li><a><article><h5>🚚 How do I locate my shipment?</h5> <span><FaAngleRight/></span></article></a></li>
                        <li><a><article><h5>💻 What are the system requirements for my laptop?</h5> <span><FaAngleRight/></span></article></a></li>
                        <li><a><article><h5>🤔 Which model is best for me?</h5> <span><FaAngleRight/></span></article></a></li>
                        <li><a><article><h5>🔙 What's your return policy?</h5><span><FaAngleRight/></span></article></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactUs
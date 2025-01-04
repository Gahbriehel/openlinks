import React, { useEffect } from 'react'
import './cart.css'
import { fetchProduct } from './redux/product/productSlice';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart } from './redux/cart/cartSlice';



const Cart = () => {

    const productData = useSelector(state => state.cart)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct())
        // 
    }, [])


    const laptops = productData.products
    console.log("Now in cart")
    console.log(laptops);
    return (
        <div className='cart_container'>
            <div className='return_text'>
                <Link to='/' className='return_link'><p><FaArrowLeft /> Continue shopping</p></Link>
            </div>
            <div className='cart_main'>
                <div className='shopping_cart'>
                    <h1>My shopping cart</h1>
                    {laptops.length === 0 ? (
                        <h2>Your cart is empty</h2>
                    ) : (
                        <div className='cart_items'>
                            {laptops.map((laptop) => {
                                return (
                                    <div key={laptop.id}>
                                        <div className='cart_card'>
                                            <div className='product_details'>
                                                <div className='cart_card_img'>
                                                    <img src={laptop.image} alt='laptop' />
                                                </div>
                                                <div className='cart_card_info'>
                                                    <div className='up'>
                                                        <h3>{laptop.name}</h3>
                                                        <p className='brand'>{laptop.brand}</p>
                                                        <p className='description'>{laptop.description}</p>
                                                    </div>
                                                    <div className='down'>
                                                        <p className='price_p'>${new Intl.NumberFormat('en-us').format(laptop.price)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='cart_card_actions'>
                                                <button onClick={() => dispatch(removeFromCart(laptop))}>Remove item <span><FaTrashAlt /></span></button>
                                                <div className='quantity'>
                                                    <label htmlFor="quantity">Quantity</label>
                                                    <input type="number" id="quantity" name="quantity" min="1"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
                <div className='order'>
                    <h1>Order here</h1>
                </div>
            </div>
        </div>
    )
}

export default Cart
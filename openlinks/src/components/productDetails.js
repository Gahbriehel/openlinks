import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cart/cartSlice';
import './productDetails.css'
import { FaArrowLeft } from "react-icons/fa";


const ProductDetails = ({ product, backToList }) => {

    const dispatch = useDispatch()

    return (
        <div>
            <div className='arrow_left' onClick={() => backToList()}><FaArrowLeft /></div>
            <div className='productDetails_container'>
                <div className='productDetails_container_left'>
                    <img src={product.image} alt='laptop'></img>
                </div>
                <div className='productDetails_container_right'>
                    <h2>{product.name}</h2>
                    <p>{product.brand} {product.category}</p>

                    <h3>Product Details</h3>
                    <p>{product.longDescription}</p>
                    <p>${new Intl.NumberFormat('en-us').format(product.price)}</p>
                    <button style={{ cursor: 'pointer' }} onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
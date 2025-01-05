import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';


const ProductDetails = ({ product, backToList }) => {

    const dispatch = useDispatch()

    return (
        <div>
            <div style={{ cursor: "pointer" }} onClick={() => backToList()}><GoArrowLeft /></div>
            <div>
                <img src={product.image} alt={product.image}></img>
            </div>
            <div>
                <h2>{product.name}</h2>
                <p>{product.brand} {product.category}</p>

                <h3>Product Details</h3>
                <p>{product.longDescription}</p>
                <p>${new Intl.NumberFormat('en-us').format(product.price)}</p> {/* copied */}

                <button style={{ cursor: 'pointer' }} onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetails;
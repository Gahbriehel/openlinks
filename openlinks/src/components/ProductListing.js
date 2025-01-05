import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './redux/product/productSlice';

import { addToCart } from './redux/cart/cartSlice';

export const ProductListing = () => {

    const productData = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct())
        // 
    }, [])

    const laptops = productData.products.products || []

    if (productData.loading === true)
        return (
            <div className='data-loading'>
                <h2>Loading</h2>
            </div>
        )

    if (productData.error) {
        return (
            <div className='data-loading'>
                <h2>Failed to load data. Refresh page</h2>
            </div>
        )
    }

    return (

        laptops.map((laptop) => {
            return (
                <div key={laptop.id}>
                    <div className='card'>
                        <div className='card_img'>
                            <img src={laptop.image} alt='laptop' />
                        </div>
                        <div className='card_info'>
                            <h3>{laptop.name}</h3>
                            <p>{laptop.brand}</p>
                        </div>
                        <div className='card_actions'>
                            <p className='price_p'>${new Intl.NumberFormat('en-us').format(laptop.price)}</p>
                            <button onClick={() => dispatch(addToCart(laptop))}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            )
        })

    )
}

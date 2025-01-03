import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
import cartSlice from "./cart/cartSlice";


const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice
    }
})

// store.subscribe("InitialState", console.log(store.getState()))

export default store;
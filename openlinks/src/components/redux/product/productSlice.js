// A redux state has a 1. store 2. Initial State 3. Reducer 4. Action creator
// Create the initial state for prroducts

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    products: [],
    error: ''
}

// console.log("In productSlice 1")

export const fetchProduct = createAsyncThunk('products/fetchProduct', (state, action) => {
    // console.log("In productSlice")
    return axios
        .get('http://localhost:3004/laptops')
        .then((res) => res.data)
})


// Create reducer and slice for product
const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer;
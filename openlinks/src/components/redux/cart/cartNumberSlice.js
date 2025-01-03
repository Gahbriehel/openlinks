import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    number: 0,
    products
}


const cartSlice = createSlice({
    name: 'cartNumber',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state
        }
    }
}) // Action, Reducer, Action Creators, Keep initialState
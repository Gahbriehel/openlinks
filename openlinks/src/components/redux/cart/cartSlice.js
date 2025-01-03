import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    number: 0,
    products: []
}


const cartSlice = createSlice({
    name: 'cartNumber',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const duplicate = state.products.find((product => product.id === action.payload.id))
            if (!duplicate) {
                state.products.push(action.payload)
                state.number = state.products.length + 1;
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id);
            state.number = state.products.length - 1;
        }
    }
})

export default cartSlice.reducer;
export const { cartAction } = cartSlice.actions;
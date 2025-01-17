import {createSlice} from "@reduxjs/toolkit"


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
                state.number = state.products.length;
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id);
            state.number = state.products.length;
        },
        clearCart: (state) => {
            state.products = []
            state.number = 0
        }
    }
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
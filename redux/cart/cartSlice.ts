import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]

        },
        removeFromCart: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)

            let cartDraft = [...state.items];

            if(itemIndex >= 0){
                cartDraft.splice(itemIndex, 1)
            }

            state.items = cartDraft;

        }

    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items

export const selectCartItem = (state, id) => state.cart.items.filter((item) => item.id === id)

export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total += item.price, 0);


export default cartSlice.reducer
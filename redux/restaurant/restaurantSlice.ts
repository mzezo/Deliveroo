import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurant: { }
}

export const cartSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        }
    }
})

export const { setRestaurant } = cartSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default cartSlice.reducer;
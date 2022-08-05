import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import restaurantSlice from "./restaurant/restaurantSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        restaurant: restaurantSlice
    }
})
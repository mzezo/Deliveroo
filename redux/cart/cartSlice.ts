import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface Item {
    id: string | number;
    restaurantId: string | number;
    price: number;
    quantity?: number;
    [key: string]: any;
}
export interface State {
    items: Record<string, Item>;
    isEmpty: boolean;
    total: number;
}

const initialState: State = {
    items: {},
    isEmpty: true,
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{id: string, item: Item}>) => {
            const { id, item } = action.payload;
            state.total += item?.price
            if(!state.items[id]){
                state.items[id] = { ...item, quantity: 1 }
            }else {
                state.items[id] = { ...item, quantity: item?.quantity! + 1 }
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            state.total -= state.items[id]?.price ?? 0
            if(state.items[id]?.quantity! > 1){
                state.items[id] = { ...state.items[id], quantity: state.items[id]?.quantity! - 1}
            }else {
                delete state.items[id]
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items

export const selectCartItem = (state: RootState, id: string) => state.cart.items[id]

export const selectCartItemTotal = (state: RootState, id: string) => state.cart.items[id]?.quantity! *  state.cart.items[id]?.price

export const selectCartItemsTotal = (state: RootState) => Object.keys(state.cart.items).reduce((total, itemKey) => total + state.cart.items[itemKey].quantity! * state.cart.items[itemKey].price, 0)

export const selectCartItemsQuantity = (state: RootState) => Object.keys(state.cart.items).reduce((sum, itemKey) => sum + state.cart.items[itemKey].quantity!, 0)

export const selectCartTotal = (state: RootState) => state.cart.total

export default cartSlice.reducer
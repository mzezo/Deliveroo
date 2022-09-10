import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IRestaurant } from '../../components/FeaturedSection/Restaurant';
export interface State {
    restaurant: IRestaurant
}

const initialState: State = {
    restaurant: { } as IRestaurant
}

export const cartSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action: PayloadAction<IRestaurant>) => {
            state.restaurant = action.payload
        }
    }
})

export const { setRestaurant } = cartSlice.actions;

export const selectRestaurant = (state: RootState) => state.restaurant.restaurant;

export default cartSlice.reducer;
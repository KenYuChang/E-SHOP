import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: []};

// helpers
const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            const existItem = state.cartItems.find((x) => x._id === item._id);
            if (existItem) {
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x);
            } else {
                state.cartItems = [...state.cartItems, item];
            }

            // Caculate items price
            state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

            // Caculate shipping price (if order > $ $1000 then free, else $120 shipping)
            state.shippingPrice = addDecimals(state.itemsPrice > 1000 ? 0 : 120);

            // Caculate tax price (5% tax)
            state.taxPrice = addDecimals(Number((0.05 * state.itemsPrice).toFixed(2)));

            // Caculate total price
            state.totalPrice = (
                Number(state.itemsPrice) + 
                Number(state.shippingPrice) + 
                Number(state.taxPrice)
            ).toFixed(2);
            
            // save in localstorage
            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

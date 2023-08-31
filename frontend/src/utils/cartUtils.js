// helpers
export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};
export const updateCart = (state) => {
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
    return state;
};

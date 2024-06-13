import { createSlice } from '@reduxjs/toolkit'
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];
import { toast, Bounce } from 'react-toastify';
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            // state.push(action.payload)
            state = [...state, newItem];
            localStorage.setItem('cart', JSON.stringify(state)); // Save cart to localStorage
            toast.success('product added into cart', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
                return state;
            
        },
        deleteFromCart(state, action) {
            const updatedCart = state.filter(item => item.id !== action.payload);
            toast.error('Item removed from cart!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
            return updatedCart;
        }
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer;
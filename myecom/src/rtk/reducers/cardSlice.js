import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./productSlice";

export const cardSlice = createSlice({
    name: "card",
    initialState: { cart: [] }, // Define the initial state of the cart as an array
    reducers: {
        addToCart: (state, action) => {
            const foundedProduct = state.cart.find((product) => product.id === action.payload.id);
            if (!foundedProduct) {
                const ProductClone = { ...action.payload, quantity: 1 };
                state.cart.push(ProductClone);
            } else {
                foundedProduct.quantity = 1; // Reset quantity to 1
            }
            localStorage.setItem('mycart', JSON.stringify(state.cart))
        },

        removeFromCart: (state, action) => {
            const product = state.cart.find((item) => item.id === action.payload);
            if (product) {
                state.cart = state.cart.filter((item) => item.id!== action.payload);
            }
            localStorage.setItem('mycart', JSON.stringify(product));
        },
        minusQuantity:(state,action )=>{
            const product = state.cart.find((item) => item.id === action.payload);
            if(product && product.quantity > 1){
                product.quantity -=1;
            }
        },
        plusQuantity:(state,action )=>{
            const product = state.cart.find((item) => item.id === action.payload);
                product.quantity +=1;
        },
        clearAllCart:(state,action)=>{
            return { cart: [] };
        }
    }
});

export const { addToCart, removeFromCart , minusQuantity , clearAllCart , plusQuantity} = cardSlice.actions;
export default cardSlice.reducer;
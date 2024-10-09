import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchAllProducts = createAsyncThunk('products/fetcha',
    async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data;
})

export const productSlice = createSlice({
    initialState : { products: [] },
    name : "products",
    reducers : {},
        extraReducers: (builder) => {
            builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            const newProducts = action.payload.filter((product) => {
                return !state.products.find((existingProduct) => existingProduct.id === product.id);
            });
            state.products = [...state.products, ...newProducts];
            });
            }}
);
export const {addToCart , removeFromCart } = productSlice.actions
export default productSlice.reducer
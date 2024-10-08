import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./reducers/productSlice";
import {cardSlice} from "./reducers/cardSlice";

// import all reducers



export  const store = configureStore({
    reducer : {

        products : productSlice.reducer,
        card : cardSlice.reducer
    }
})

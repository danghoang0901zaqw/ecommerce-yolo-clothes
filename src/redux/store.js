import { configureStore } from '@reduxjs/toolkit'
import productModalSlice from './productModal/productModalSlice'
import cartItemSlice from './shopping-carts/cartItemSlice'
    export const store = configureStore({
    reducer: {
        productModal: productModalSlice,
        cartItems:cartItemSlice,
    },
})
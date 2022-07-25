import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cart/cartSlice"
import productsReducer from "./products/productsSlice"
import userReducer  from "./user/userSlice"


const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        user: userReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})

export default store

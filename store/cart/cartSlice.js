import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    showCart: false,
    cartItems:[],
}
const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers:{
        addCartItems(state, action){
            const existingItem = state.cartItems.find(product=> (product.id === action.payload.id && product.size === action.payload.size))
        if(existingItem){
            const cartItems = state.cartItems.map(product=> product.id === action.payload.id ? {...product, qty: product.qty + 1} : product)
            return {...state, cartItems}
        }
        const cartItems = [...state.cartItems, {...action.payload, qty: 1}]
        return {...state, cartItems}
        },
        decrementCartItems(state, action){
            const existingItem = state.cartItems.find(product=> (product.id === action.payload.id && product.size === action.payload.size))
        if(existingItem.qty ===1){
            const cartItems =  state.cartItems.filter(product=> product.id !== action.payload.id)
            return {...state, cartItems}
        }
        const cartItems = state.cartItems.map(product=> (product.id === action.payload.id && product.size === action.payload.size) ? {...product, qty: product.qty - 1} : product)
        return {...state, cartItems}
        },
        removeCartItem(state, action){
            const existingItemIndex = state.cartItems.findIndex(product=> (product.id === action.payload.id && product.size === action.payload.size))
            state.cartItems.splice(existingItemIndex, 1)
        },
        toggleCart(state, action){
            const showCart = action.payload
        return {...state, showCart}
        }
    }

})

export const cartActions = cartSlice.actions

export default cartSlice.reducer
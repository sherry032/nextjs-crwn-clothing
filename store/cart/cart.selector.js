import {createSelector} from "reselect"
const selectCartReducer = (state) => state.cart

export const selectCartItems = createSelector([selectCartReducer],(cart)=> cart.cartItems)
export const selectShowCart = createSelector([selectCartReducer],(cart)=> cart.showCart)
export const selectTotalCount = createSelector([selectCartItems],(cartItems)=> cartItems.reduce((acc, item)=> acc + item.qty,0))
export const selectTotalPrice = createSelector([selectCartItems],(cartItems)=> cartItems.reduce((acc, item)=> acc + item.price * item.qty,0))
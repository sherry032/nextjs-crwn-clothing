import { createSlice } from "@reduxjs/toolkit";

const PRODUCTS_INITIAL_STATE = {
    products: [],
    isLoading: false,
    error: null
}

const productsSlice = createSlice({
    name: "products",
    initialState:PRODUCTS_INITIAL_STATE,
    reducers:{
        setProducts(state, action){
            state.products = action.payload
            state.isLoading = false
        },
        setLoading(state){
            state.isLoading = true
        },
        setError(state, action){
            state.error = action.payload
            state.isLoading = false
        }
    }
})

export const productsActions = productsSlice.actions
export default productsSlice.reducer


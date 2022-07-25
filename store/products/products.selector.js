import { createSelector } from "reselect"

const selectProductsReducer = (state) =>  state.products

export const selectIsLoading = createSelector([selectProductsReducer],(productsSlice)=> productsSlice.isLoading) 

export const selectError = createSelector([selectProductsReducer],(productsSlice)=> productsSlice.error) 

export const selectProductsArr = createSelector([selectProductsReducer], (productsSlice)=> productsSlice.products)

export const selectProducts = createSelector([selectProductsArr],(products)=>products.reduce((acc, category)=>{
    const {title, items} = category
    acc[title.toLowerCase()] = items
    return acc
},{}))


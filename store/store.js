import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cart/cartSlice"
import productsReducer from "./products/productsSlice"
import userReducer  from "./user/userSlice"
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export let persistor = persistStore(store)
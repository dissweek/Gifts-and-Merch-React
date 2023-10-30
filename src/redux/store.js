import { configureStore } from '@reduxjs/toolkit'
import catalog from './slices/catalogSlice'
import cart from './slices/cartSlice'

export const store =configureStore({
    reducer : {
        catalog,
        cart,
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
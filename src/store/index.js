import { configureStore } from '@reduxjs/toolkit'
import authSlilce from './auth/auth.slice'
import { basketSlice } from './basket/basketSlice'
import { mealsSlice } from './meals/mealsSlice'
import { orderSlice } from './order/orderSlice'
import { uiSlice } from './ui/uiSlice'

export const store = configureStore({
    reducer: {
        [mealsSlice.name]: mealsSlice.reducer,
        [basketSlice.name]: basketSlice.reducer,
        [uiSlice.name]: uiSlice.reducer,
        [authSlilce.name]: authSlilce.reducer,
        [orderSlice.name]: orderSlice.reducer,
    },
})

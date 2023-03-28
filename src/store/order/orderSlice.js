import { createSlice } from '@reduxjs/toolkit'
import { getAllOrders, getOrders } from './orderThunk'

const initialState = {
    items: [],
    allitems: [],
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.items = action.payload
        })
        builder.addCase(getAllOrders.fulfilled, (state, action) => {
            state.allitems = action.payload
        })
    },
})

/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { allOrderReq, getOrderReq, postOrderReq } from '../../api/orderService'

export const getOrders = createAsyncThunk(
    'order/getOrders',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getOrderReq()
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const postOrders = createAsyncThunk(
    'order/postOrders',
    async (totalPrice, { dispatch, rejectWithValue }) => {
        try {
            await postOrderReq(totalPrice)
            return dispatch(getOrders())
        } catch (error) {
            rejectWithValue(error)
        }
    }
)
export const getAllOrders = createAsyncThunk(
    'order/getAllOrders',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await allOrderReq()
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

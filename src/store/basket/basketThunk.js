import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    getBasketReq,
    postAddToBasketReq,
    putUpdateBasketReq,
} from '../../api/basketService'

import fetchAPI from '../../lib/FetchAPI'

export const getBasket = createAsyncThunk(
    'basket/getBasket',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getBasketReq()
            return data.data.items
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const addToBasket = createAsyncThunk(
    'basket/addNewBasket',
    async (newItem, { dispatch, rejectWithValue }) => {
        try {
            console.log('asd')
            await postAddToBasketReq(newItem)
            dispatch(getBasket())
        } catch (error) {
            rejectWithValue(error)
        }
    }
)
export const updateBasketItem = createAsyncThunk(
    'basket/updateBasket',
    async ({ id, amount }, { dispatch, rejectWithValue }) => {
        try {
            await putUpdateBasketReq(id, amount)
            dispatch(getBasket())
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const deleteBasketItem = createAsyncThunk(
    'basket/deleteBasket',
    async (id, { dispatch, rejectWithValue }) => {
        try {
            await deleteBasketItem(id)
            dispatch(getBasket())
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const orderSubmit = createAsyncThunk(
    'basket/orderSubmit',
    async ({ orderData }, { dispatch, rejectWithValue }) => {
        try {
            await fetchAPI(`https://jsonplaceholder.typicode.com/postss`, {
                method: 'POST',
                body: orderData,
            })
            return dispatch(getBasket())
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }
    }
)

import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    deleteMealReq,
    editMealReq,
    getMealReq,
    postMealReq,
} from '../../api/mealService'

export const getMeals = createAsyncThunk(
    'meals/getMeals',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getMealReq()
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const postMeals = createAsyncThunk(
    'meals/postMeals',
    async (newMeal, { dispatch, rejectWithValue }) => {
        try {
            await postMealReq(newMeal)
            return dispatch(getMeals())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const deleteMeals = createAsyncThunk(
    'meals/deleteMeals',
    async (id, { dispatch, rejectWithValue }) => {
        try {
            await deleteMealReq(id)
            return dispatch(getMeals())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const editMeals = createAsyncThunk(
    'meals/editMeals',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            await editMealReq(data)
            return dispatch(getMeals())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

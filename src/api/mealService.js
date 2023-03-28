import { axiosInstans } from '../config/axiosInstance'

export const postMealReq = (newMeal) => {
    return axiosInstans.post('/foods', newMeal)
}

export const getMealReq = () => {
    return axiosInstans.get('/foods')
}

export const deleteMealReq = (id) => {
    return axiosInstans.delete(`/foods/${id}`)
}

export const editMealReq = (data) => {
    return axiosInstans.put(`/foods/${data.id}`, data.editData)
}

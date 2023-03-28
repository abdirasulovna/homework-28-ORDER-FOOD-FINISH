import { axiosInstans } from '../config/axiosInstance'

export const getBasketReq = () => {
    return axiosInstans.get('/basket')
}

export const postAddToBasketReq = (newItem) => {
    return axiosInstans.post(`foods/${newItem.id}/addToBasket`, {
        amount: newItem.amount,
    })
}

export const putUpdateBasketReq = (id, basketAmount) => {
    return axiosInstans.put(`basketItem/${id}/update`, {
        amount: basketAmount,
    })
}
export const deleteBasketReq = (id) => {
    return axiosInstans.delete(`basketItem/${id}/delete`)
}

import { axiosInstans } from '../config/axiosInstance'

export const postOrderReq = (price) => {
    return axiosInstans.post('/orders', price)
}
export const getOrderReq = () => {
    return axiosInstans.get('/orders')
}

export const allOrderReq = () => {
    return axiosInstans.get('/orders/all')
}

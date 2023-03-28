import { axiosInstans } from '../config/axiosInstance'

export const signUpRequest = (data) => {
    return axiosInstans.post('/auth/register', data)
}

export const signInRequest = (data) => {
    return axiosInstans.post('/auth/login', data)
}

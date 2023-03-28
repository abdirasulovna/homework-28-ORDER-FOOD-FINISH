import axios from 'axios'
import { store } from '../store'
import { signOut } from '../store/auth/auth.thunk'

const BASE_URL =
    'http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1'

// const headers = { UserId: 'nuraiym', 'Content-Type': 'application/json' }

export const axiosInstans = axios.create({
    baseURL: BASE_URL,
})

axiosInstans.interceptors.request.use(
    function (config) {
        const newConfig = {
            ...config,
            headers: {
                ...config.headers,
                Authorization: store.getState().auth.token,
            },
        }
        return newConfig
    },
    function (error) {
        return error
    }
)

axiosInstans.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        if (error.status === 400) {
            store.dispatch(signOut())
        }
        return error
    }
)

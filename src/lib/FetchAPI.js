const BASE_URL =
    'http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1'

const fetchAPI = async (path, options = {}) => {
    try {
        const requestOptions = {
            method: options.method || 'GET',
            headers: { UserID: 'nuraiym', 'Content-Type': 'application/json' },
        }
        if (requestOptions.method !== 'GET') {
            requestOptions.body = JSON.stringify(options.body)
        }

        const response = await fetch(`${BASE_URL}/${path}`, requestOptions)

        if (!response.ok) {
            throw new Error('Something went wrong')
        }

        const result = await response.json()

        return result
    } catch (error) {
        return error
    }
}

export default fetchAPI

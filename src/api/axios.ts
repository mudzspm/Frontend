import axios from "axios"

export const api = axios.create({
    withCredentials: true,
    baseURL: "http://52.77.157.79:3000/api",
})

const errorHandler = (error) => {
    const statusCode = error.response?.status

    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        console.error(error)
    }

    return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})
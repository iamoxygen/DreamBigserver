import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

export const insertUser = payload => api.post(`/movie`, payload)
export const getAllUser = () => api.get(`/movies`)
export const updateUserById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteUserById = id => api.delete(`/movie/${id}`)
export const getUserById = id => api.get(`/movie/${id}`)

const apis = {
    insertUser,
    getAllUser,
    updateUserById,
    deleteUserById,
    getUserById,
}

export default apis

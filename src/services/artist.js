import axios from 'axios'
import { BASE_URL } from '../constants/urls' 

export const getArtistById = (id) => {
    const token = localStorage.getItem('token')
        return axios.get(`${BASE_URL}artist/${id}`, {
            headers: {
                Authorization: token
            }
        })
}

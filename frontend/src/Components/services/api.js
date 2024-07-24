import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/list';

export const getItems = () => {
    return axios.get(API_URL);
}

export const createItem = (item) => {
    return axios.post(API_URL, item);
}

export const deleteItem = (id) => {
    return axios.delete(`${API_URL}/${id}`);
}

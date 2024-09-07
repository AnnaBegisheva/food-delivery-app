import axios from "axios";

const baseURL = 'https://x8ki-letl-twmt.n7.xano.io/api:6AjmqRV7/';

export const getData = async (path) => {
    const url = `${baseURL}${path}`
    const response = await axios.get(url);
    return response.data;
}

export const createCart = async () => {
    const url = `${baseURL}cart/create`;
    const response = await axios.post(url, {
        "instance_id": "cf78961c-72df-45ff-be8f-637e32e4b7f5"
    });

    if (response.status) {
        console.log(response.data.id);
        return response.data.id
    }

    throw new Error("Failed to create cart", response.status);
}

export const postData = (path, data) => {
    const url = `${baseURL}${path}`

    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json()
        })
        .catch((error) => {
            console.error('Fetch error:', error);
            throw error;
        })
}
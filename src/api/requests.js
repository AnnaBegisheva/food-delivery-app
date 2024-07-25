
const baseURL = 'https://x8ki-letl-twmt.n7.xano.io/api:6AjmqRV7/';

export const getData = (path) => {
    const url = `${baseURL}${path}`

    return fetch(url, {
        method: 'GET',
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
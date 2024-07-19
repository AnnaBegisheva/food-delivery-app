const baseURL = 'https://x8ki-letl-twmt.n7.xano.io/api:6AjmqRV7/';

export const getData = (path, setData) => {
    const url = `${baseURL}${path}`
    const myHeaders = new Headers()
    myHeaders.append('accept', 'application/json')

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    }
    fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => result.sort((a, b) => (a.id > b.id ? 1 : -1)))
        .then((data) => setData(data))
        .catch((error) => console.error(error))
}
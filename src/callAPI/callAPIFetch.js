import * as api_url from './../constants'
export default function callAPIFetch(path, method, data) {
    let objFetch
    if (method === "GET") {
        objFetch = {
            method
        }
    } else {
        objFetch = {
            method,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }
    }

    return new Promise((resolve, reject) => {
        const url = api_url.API_URL + path;
        fetch(url, objFetch)
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
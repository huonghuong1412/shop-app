import axios from 'axios'
import * as api_url from './../constants'
export default function callAPI(path, method, body) {
    return axios({
        method: method,
        url: `${api_url.API_URL}/${path}`,
        data: body
    }).catch((err) => {
        console.log(err);
    })
}

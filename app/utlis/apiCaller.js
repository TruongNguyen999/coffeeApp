import axios from 'axios';
import * as config from '../contants/configs';

export default function callApi(endPoint, method = 'GET', body) {
    return (
        axios({
            method: method,
            url: `${config.API_URL}/${endPoint}`,
            data: body
        }).then(res => res.data).catch(err => {
            console.log(err);
        })
    );
}
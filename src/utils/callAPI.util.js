import {HOST} from "../constants/host"
import axios from "axios";

export default function APICaller(endpoint, method = 'GET', body){
    // body.key , body.limit
    return axios({
        method: method,
        url: `${HOST}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};


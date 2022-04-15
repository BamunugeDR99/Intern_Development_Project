import axios from 'axios';

export default axios.create({
    baseURL : "https://stage-api.serw.io/v1"
})
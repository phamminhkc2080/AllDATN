import axios from "axios";

export const request = axios.create({
    baseURL:'http://172.20.10.2:8000/api'
})
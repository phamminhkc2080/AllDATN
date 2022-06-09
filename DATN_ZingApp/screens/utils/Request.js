import axios from "axios";

export const request = axios.create({
    baseURL:'localhost:8000/api/'
})
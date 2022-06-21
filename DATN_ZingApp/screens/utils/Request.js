import axios from "axios";

export const request = axios.create({
    baseURL:'https://application-mock-server.loca.lt/api'
})
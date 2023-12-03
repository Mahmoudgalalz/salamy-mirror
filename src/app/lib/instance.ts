import axios from "axios";

const token = process.env.API_KEY

export const instance = axios.create({
    baseURL:process.env.API_URL,
    timeout:2000,
    headers:{'Authorization':`Bearer ${token}`}
})
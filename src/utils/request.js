import axios from "axios";
const request = axios.create({
    baseURL:import.meta.env.VITE_APP_API,
    timeout:5000,
})

export default request;
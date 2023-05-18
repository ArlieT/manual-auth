'use client'
import axios from "axios";
import { getItemToken } from "./tokenServices";

const api = axios.create({
    baseURL: process.env.baseUrl,
});



api.interceptors.request.use(
    (config) => {
        const token = getItemToken();
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;  // for Django back-end
            //   config.headers["x-access-token"] = token; // for Node.js Express back-end
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default api
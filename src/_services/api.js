import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();

const api = axios.create({
    baseURL: process.env.BACKEND_URL
});

export default api;
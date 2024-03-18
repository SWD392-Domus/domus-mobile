import axios from 'axios';

const BASE_URL = "https://domus.io.vn/api";
const axiosCall = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosCall;
  
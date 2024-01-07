import axios from "axios";
const BASE_URL = "http://localhost:3000";
const TIMEOUT = 10000;
const axiosRequest = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: { "X-Custom-Header": "foobar" },
});

export default axiosRequest;

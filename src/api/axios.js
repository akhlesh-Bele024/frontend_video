import axios from "axios";

const api = axios.create({
  // baseURL: import.meta.env.VITE_API_URL
  baseURL:'https://backend-video.vercel.app/api/v1',
  withCredentials: true,
});

console.log(api)

export default api;

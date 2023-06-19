import axios from "axios";

const api = axios.create({
  baseURL: "https://notepads.eduardovelho.com/",
});

export default api;

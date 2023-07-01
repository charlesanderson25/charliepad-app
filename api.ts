import axios from "axios";
import { useGlobalState } from "./useGlobalState";

const globalState = useGlobalState.getState();
const setIsLoading = (
  globalState as { setIsLoading: (isLoading: boolean) => void }
).setIsLoading;

const api = axios.create({
  baseURL: "https://notepads.eduardovelho.com/",
});

api.interceptors.request.use((config) => {
  setIsLoading(true);
  return config;
});

api.interceptors.response.use((response) => {
  setIsLoading(false);
  return response;
});

export default api;

import axios from 'axios';
import { URL_BACKEND } from '../env';

const api = axios.create({
  baseURL: URL_BACKEND,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('@Associados:token');
      localStorage.removeItem('@Associados:user');
    }

    return Promise.reject(error);
  }
);

export default api;

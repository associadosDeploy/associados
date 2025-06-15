// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.URL_BACKEND,
});

// You can also add interceptors here if needed, for example, to handle errors globally
// or to add an authorization token to requests.
// api.interceptors.request.use(config => {
//   // const token = localStorage.getItem('token');
//   // if (token) {
//   //   config.headers.Authorization = `Bearer ${token}`;
//   // }
//   return config;
// });

export default api;
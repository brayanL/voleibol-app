import axios from 'axios';

/**
 * Global Configurations for Axios, setting BaseURL, Timeout
 * and Interceptors.
 * */
const api = axios.create({
    baseURL: 'http://192.168.1.3:8000/game/',
    timeout: 10000,
  });

api.interceptors.request.use(config => {
  // Do something before request is sent
  console.log('Catched Request: ', config);
  return config;
}, error => {
  // Do something with request error
  console.log('Catched Request Error:', error);
  return Promise.reject(error);
});

export default api;

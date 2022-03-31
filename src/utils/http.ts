import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8099',
  withCredentials: true,
  timeout: 7000
});

// 请求拦截器
instance.interceptors.request.use((config: AxiosRequestConfig) => config, (error: AxiosError) => Promise.reject(error));

// 响应拦截器
instance.interceptors.response.use((response: AxiosResponse) => response, (error: AxiosError) => Promise.reject(error));


export default instance;

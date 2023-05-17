import axios, { AxiosInstance, AxiosRequestConfig, AxiosInterceptorManager } from 'axios';

const host: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authHost: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.headers!.Accept = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

(authHost.interceptors.request as AxiosInterceptorManager<AxiosRequestConfig>).use(authInterceptor);

export { host, authHost };
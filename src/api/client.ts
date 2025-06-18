// src/api/client.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAuthToken } from '../utils/utils';
import Constants from 'expo-constants';


// const API_BASE_URL = 'https://your-api-url.com/api'; // replace with your API base URL
// const API_BASE_URL = 'https://91fc-2409-40d1-14-7196-584b-ae9f-6d9-76a2.ngrok-free.app/api/v1'; // replace with your API base URL
const API_BASE_URL = Constants.expoConfig?.extra?.API_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor (optional, for auth headers)
axiosInstance.interceptors.request.use(
  async (config) => {
    // Example: Add token if available
    const token = await getAuthToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (optional, for error formatting)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Customize error response handling here
    return Promise.reject(error.response?.data || error.message);
  }
);

const apiClient = {
  get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
    axiosInstance.get<T>(url, config),

  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    const isFormData = data instanceof FormData;

    return axiosInstance.post<T>(url, data, {
      ...config,
      headers: {
        ...(config?.headers || {}),
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      },
    });
  },

  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    const isFormData = data instanceof FormData;

    return axiosInstance.patch<T>(url, data, {
      ...config,
      headers: {
        ...(config?.headers || {}),
        ...(isFormData ? {'Content-Type': 'multipart/form-data'} : { 'Content-Type': 'application/json' }),
      },
    });
  },
  delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
    axiosInstance.delete<T>(url, config),
};

export default apiClient;

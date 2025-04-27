// src/api/client.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAuthToken } from '../utils/utils';

// const API_BASE_URL = 'https://your-api-url.com/api'; // replace with your API base URL
const API_BASE_URL = 'https://e6ca-2409-40d1-81-4c41-236-df1-1f68-b1e4.ngrok-free.app/api/v1'; // replace with your API base URL

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

  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
    axiosInstance.post<T>(url, data, config),

  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
    axiosInstance.patch<T>(url, data, config),

  delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
    axiosInstance.delete<T>(url, config),
};

export default apiClient;

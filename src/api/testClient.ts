import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAuthToken } from '../utils/utils'; // Your token getter
import Constants from 'expo-constants';
import { Platform } from 'react-native';

// Update this based on your API
const API_BASE_URL = Platform.OS === 'web'
  ? "https://aca2-2409-40d1-1c-c8e1-5458-a369-8af0-56e2.ngrok-free.app/api/v1/"
  : Constants.expoConfig?.extra?.API_URL;
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {
    const token = await getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => Promise.reject(error)
);

const handleResponse = <T>(response: AxiosResponse<T>): T => response.data;

const handleError = (error: any) => {
  console.error('API Error:', error?.response || error?.message);
  throw error?.response?.data || { message: 'An error occurred' };
};

export const apiClient = {
  get: async <T>(url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await api.get<T>(url, config);
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  post: async <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
    try {
      const response = await api.post<T>(url, data, config);
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  put: async <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
    try {
      const response = await api.put<T>(url, data, config);
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await api.delete<T>(url, config);
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  },
};

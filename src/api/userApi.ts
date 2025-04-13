import { apiClient } from './apiClient';
import { ENDPOINTS } from './endPoints';

export const getUser = async (userId: string, token: string) => {
  return apiClient(ENDPOINTS.GET_USER(userId), 'GET', undefined, token);
};

export const updateUser = async (userId: string, data: any, token: string) => {
  return apiClient(ENDPOINTS.UPDATE_USER(userId), 'PUT', data, token);
};

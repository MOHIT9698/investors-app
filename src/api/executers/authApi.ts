import { apiClient } from './apiClient';
import { ENDPOINTS } from '../endPoints';

export const login = async (email: string, password: string) => {
  return apiClient(ENDPOINTS.LOGIN, 'POST', { email, password });
};
export const verifyPhoneNumber = async (phoneNumber: string) => {
  return apiClient(ENDPOINTS.VERIFY_PHONE, 'POST', { phoneNumber });
};

export const register = async (email: string, password: string, name: string) => {
  return apiClient(ENDPOINTS.REGISTER, 'POST', { email, password, name });
};

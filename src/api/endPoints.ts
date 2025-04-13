
export const ENDPOINTS = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  VERIFY_PHONE:'auth/phone_verifivation',
  GET_USER: (userId: string) => `users/${userId}`,
  UPDATE_USER: (userId: string) => `users/${userId}`,
};
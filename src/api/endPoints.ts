
export const ENDPOINTS = {
  LOGIN: 'auth/login',
  REGISTER: 'signup/details',
  SIGN_UP:'investex-signup',
  VERIFY_PHONE:'verify-phone',
  GET_USER: (userId: string) => `users/${userId}`,
  UPDATE_USER: (userId: string) => `users/${userId}`,
};
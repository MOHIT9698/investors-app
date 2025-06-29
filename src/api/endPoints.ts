
export const ENDPOINTS = {
  LOGIN: 'login',
  REGISTER: 'signup/details',
  SIGN_UP:'investex-signup',
  VERIFY_PHONE:'verify-phone',
  FORGOT_PASSWORD:'forget-password',
  PROFILE:'profile',
  SEARCH_STOCK:(q:string) => `search-stocks?query=${q}`,
  CREATE_TRADE: `create-trade`,
};
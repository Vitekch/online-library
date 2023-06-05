export const LS_AUTH_TOKEN_KEY = 'AUTH_TOKEN';
export const LS_USER_ROLE_KEY = 'USER_ROLE';

export const ROLES = {
  ADMIN: 1,
  MEMBER: 2,
};

export const isAuth = () => {
  return !!window.localStorage.getItem(LS_AUTH_TOKEN_KEY);
};

export const getRole = () => {
  if (isAuth()) {
    return window.localStorage.getItem(LS_USER_ROLE_KEY);
  }
  return 0;
}

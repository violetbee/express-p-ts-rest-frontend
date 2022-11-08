import { variableNames } from '../options/default';

export const LOGIN_USER = (email: string, password: string) =>
  fetch(`${variableNames.server}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });

//Get User JWT
export const GET_USER = () => {
  return fetch(`${variableNames.server}/api/v1/user/get/me`, {
    cache: 'no-cache',
    credentials: 'include',
  });
};

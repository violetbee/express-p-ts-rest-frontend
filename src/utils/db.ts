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

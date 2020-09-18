import env from './env.config';

export const {
  URL: SERVER_URL,
} = env;
export const endpoints = {
  ME: '/me',
  EVERYTHING: '/everything',
};

export const mockResponses = env.fixtures || {};

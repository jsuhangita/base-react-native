// import jwt from 'jwt-decode';
import {
  storageKeys, set, get, remove,
} from './storage.util';

export function setToken(token) {
  set(storageKeys.USER_TOKEN, token);
}

export function removeToken() {
  remove(storageKeys.USER_TOKEN);
}

export function getToken() {
  return get(storageKeys.USER_TOKEN);
}

export function decryptToken(token) {
  if (!token) return {};
  return {}; // TODO: for now
  // return jwt(token);
}

export function getUserDetail() {
  return decryptToken(getToken());
}

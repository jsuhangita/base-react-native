import AsyncStorage from '@react-native-community/async-storage';

export const storageKeys = {
  LANGUAGE: 'language',
  INITIAL_SETUP: 'initialSetup',
  APP_CONFIG: 'appConfig',
};
// methods for storing and retrieving objects
export const set = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));

export const get = (key) => AsyncStorage.getItem(key).then((value) => JSON.parse(value));

export const remove = (key) => AsyncStorage.removeItem(key);

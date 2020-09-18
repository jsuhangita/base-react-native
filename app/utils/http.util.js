import axios from 'axios';
import { SERVER_URL, endpoints } from '../configs/api.config';
import {
  getStatusValidatorInterceptor,
  mockInterceptor,
  addDefaultPayloadInterceptor,
} from './interceptors.util';
import { get, storageKeys } from './storage.util';
import { deviceInfo } from './device.util';

const baseConfig = {
  baseURL: SERVER_URL,
  timeout: 60000, // 60 seconds. for UAT TESTING
  withCredentials: true,
  validateStatus: () => true,
  cancelToken: null,
  // onDownloadProgress: () => {}, // Left this as a reference incase we need it
};

export async function GET(endpoint, path = '', headers = {}, options = {}) {
  const appConfig = await get(storageKeys.APP_CONFIG);
  const baseHeaders = {
    'x-app-version': await deviceInfo.app_version(),
    'x-client-id': await deviceInfo.device_id(),
  };
  const config = {
    ...baseConfig,
    ...options,
    headers: {
      ...baseHeaders,
      ...(appConfig.access_token && { Authorization: `Bearer ${appConfig.access_token}` }),
      ...headers,
    },
    method: 'get',
    endpoint,
    url: `${endpoints[endpoint]}${path}`,
  };
  return axios(config);
}
export async function POST(endpoint, path = '', data = {}, headers = {}, options = {}) {
  const appConfig = await get(storageKeys.APP_CONFIG);
  const baseHeaders = {
    'x-app-version': await deviceInfo.app_version(),
    'x-client-id': await deviceInfo.device_id(),
  };
  const config = {
    ...baseConfig,
    headers: {
      ...baseHeaders,
      ...(appConfig.access_token && { Authorization: `Bearer ${appConfig.access_token}` }),
      ...headers,
    },
    ...options,
    method: 'post',
    endpoint,
    url: `${endpoints[endpoint]}${path}`,
    data,
  };
  return axios(config);
}
export async function PUT(endpoint, path = '', data = {}, headers = {}, options = {}) {
  const appConfig = await get(storageKeys.APP_CONFIG);
  const baseHeaders = {
    'x-app-version': await deviceInfo.app_version(),
    'x-client-id': await deviceInfo.device_id(),
  };
  const config = {
    ...baseConfig,
    headers: {
      ...baseHeaders,
      ...(appConfig.access_token && { Authorization: `Bearer ${appConfig.access_token}` }),
      ...headers,
    },
    ...options,
    method: 'put',
    endpoint,
    url: `${endpoints[endpoint]}${path}`,
    data,
  };
  return axios(config);
}
export async function DELETE(endpoint, path = '', data = {}, headers = {}, options = {}) {
  const appConfig = await get(storageKeys.APP_CONFIG);
  const baseHeaders = {
    'x-app-version': await deviceInfo.app_version(),
    'x-client-id': await deviceInfo.device_id(),
  };
  const config = {
    ...baseConfig,
    headers: {
      ...baseHeaders,
      ...(appConfig.access_token && { Authorization: `Bearer ${appConfig.access_token}` }),
      ...headers,
    },
    ...options,
    method: 'delete',
    endpoint,
    url: `${endpoints[endpoint]}${path}`,
    data,
  };
  return axios(config);
}

export const initializeHTTPInterceptors = (store) => {
  axios.interceptors.request.use(mockInterceptor, Promise.reject);
  // axios.interceptors.request.use(getNoNetWorkInterceptor(store), Promise.reject);
  // axios.interceptors.request.use(demoAccountInterceptor, Promise.reject); // FOR LATER
  axios.interceptors.request.use(addDefaultPayloadInterceptor(store), Promise.reject);
  // axios.interceptors.request.use(removeFalsyValues, Promise.reject);
  // RESPONSE INTERCEPTORS
  axios.interceptors.response.use(getStatusValidatorInterceptor(store), Promise.reject);
};

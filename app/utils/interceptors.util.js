import {
  isEmpty, result, forEach, isArray,
} from 'lodash';
import { mockResponses } from '../configs/api.config';
import { filterObjectProperties } from './transformer.util';
import env from '../configs/env.config';

export function addDefaultPayloadInterceptor(store) {
  return (config) => {
    if (config.method === 'get') {
      return config;
    }
    const reduxState = store.getState();
    const extraPayload = {
      ...reduxState.additionalApiPayload,
    };
    if (config.data instanceof FormData) {
      forEach(filterObjectProperties(extraPayload, config.additional || []), (value, key) => {
        config.data.append(key, value);
      });
    } else if (isArray(config.data)) {
      return config;
    } else {
      config.data = { // eslint-disable-line
        ...filterObjectProperties(extraPayload, config.additional || []),
        ...config.data,
      };
    }
    return config;
  };
}

// Interceptor that checks the status of the response
export const getStatusValidatorInterceptor = () => (response) => {
  const { status, data, error } = response;
  if (status >= 200 && status < 300 && isEmpty(error)) {
    return data;
  }
  if (status === 401) {
    // store.dispatch(commonAction.cleanAppState());
    // store.dispatch(NavigationActions.navigate({ routeName: 'SignInScreen' }));
  }
  throw data || {};
};

// Interceptor that sets mock response
export const mockInterceptor = (config) => {
  if (env.MOCKAPI) {
    console.log('SETTING MOCK for endpoint', config.endpoint); // eslint-disable-line no-console
    config.adapter = mockAdapter; // eslint-disable-line
  }
  return config;
};

const mockAdapter = (config) => new Promise((resolve) => {
  const endPoint = config.url.substr(config.url.indexOf('v1/') + 2);
  const mockData = result(mockResponses, endPoint, {});
  const response = {
    data: mockData.response,
    status: mockData.status || 200,
    statusText: 'OK - Mocked request',
    headers: { mock: true },
    config,
  };
  setTimeout(() => resolve(response), 1000);
});

// const noNetworkAdaptor = () => Promise.reject({'data': {'notConnected': true}});

// export const getNoNetWorkInterceptor =  (store) => (config) => {
//   const isConnected = result(store.getState(), 'networkStatus.isConnected', true);
//   if (!isConnected) {
//     store.dispatch(highlightNetworkBar({routeName: config.endpoint}));
//     return {...config, adapter: noNetworkAdaptor};
//   }
//   return config;
// };

// FOR LATER
// export const demoAccountInterceptor = (config) => {
//   if (/^DEMO-/.test(result(config, 'data', ''))) {
//     if (config.endpoint !== 'KEY') {
//       return null;
//     }
//   }
//   return config;
// };

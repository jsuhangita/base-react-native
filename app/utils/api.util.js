import * as Http from './http.util';

export function me(path = '', data, headers = {}, options = {}) {
  return Http.GET('ME', path, headers, options);
}
export function mePost(path = '', data, headers = {}, options = {}) {
  return Http.POST('ME', path, data, headers, options);
}

export function meDelete(path = '', data, headers = {}, options = {}) {
  return Http.DELETE('ME', path, data, headers, options);
}

export function mePut(path = '', data, headers = {}, options = {}) {
  return Http.PUT('ME', path, data, headers, options);
}

export function everything(path = '', data, headers = {}, options = {}) {
  return Http.GET('EVERYTHING', path, data, headers, options);
}




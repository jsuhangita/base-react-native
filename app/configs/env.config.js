const defaults = {
  ENV: 'dev',
  MOCKAPI: false,
  URL: 'http://newsapi.org/v2',
};

const setEnv = (envKey, value) => {
  defaults[envKey] = value;
  return defaults;
};

module.exports = {
  setEnv,
  get ENV() {
    return defaults.ENV;
  },
  get MOCKAPI() {
    return defaults.MOCKAPI;
  },
  URL: defaults.URL,
};

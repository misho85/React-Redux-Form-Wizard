export const getConfigState = store => store.fetchConfig;
export const getConfig = store => store.fetchConfig.config;
export const getConfigLoading = store => store.fetchConfig.loading;
export const getConfigError = store => store.fetchConfig.error;

export const getGenres = store =>
  store.fetchConfig.config.reduce((acc, curr) => acc.concat(curr.name), []);

export const getPickGenre = store => store.genre;

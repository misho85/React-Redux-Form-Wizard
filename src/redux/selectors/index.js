export const getConfigState = store => store.fetchConfig;
export const getConfig = store => store.fetchConfig.config;
export const getConfigLoading = store => store.fetchConfig.loading;
export const getConfigError = store => store.fetchConfig.error;

export const getGenres = store => getConfig(store).reduce((acc, curr) => acc.concat(curr.name), []);
export const getPickGenre = store => store.pickGenre;

export const getSubgenres = store =>
  getConfig(store).filter(genre => genre.name === getPickGenre(store))[0].subgenres;
export const getSubgenresNames = store =>
  getSubgenres(store).reduce((acc, curr) => acc.concat(curr.name), []);
export const getPickSubgenre = store => store.pickSubgenre;

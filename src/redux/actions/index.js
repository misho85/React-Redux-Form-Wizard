import { FETCH_CONFIG_PENDING, FETCH_CONFIG_SUCCESS, FETCH_CONFIG_ERROR } from './types';
import axios from 'axios';

export const fetchConfigPending = () => {
  return {
    type: FETCH_CONFIG_PENDING
  };
};

export const fetchConfigSuccess = config => {
  return {
    type: FETCH_CONFIG_SUCCESS,
    config
  };
};

export const fetchConfigError = error => {
  return {
    type: FETCH_CONFIG_ERROR,
    error
  };
};

export const fetchConfig = apiUrl => {
  return dispatch => {
    dispatch(fetchConfigPending());
    return axios
      .get(apiUrl)
      .then(({ data }) => {
        dispatch(fetchConfigSuccess(data.genres));
      })
      .catch(error => {
        dispatch(fetchConfigError(error));
      });
  };
};

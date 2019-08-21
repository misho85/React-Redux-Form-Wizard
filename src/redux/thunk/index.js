import { fetchConfigLoading, fetchConfigSuccess, fetchConfigError } from '../actions';
import axios from 'axios';

export const fetchConfig = apiUrl => {
  return dispatch => {
    dispatch(fetchConfigLoading());
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

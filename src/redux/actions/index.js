import {
  FETCH_CONFIG_LOADING,
  FETCH_CONFIG_SUCCESS,
  FETCH_CONFIG_ERROR,
  SET_GENRE,
  SET_SUBGENRE,
  ADD_SUBGENRE
} from './types';
import axios from 'axios';

// actions
export const fetchConfigLoading = () => ({
  type: FETCH_CONFIG_LOADING
});

export const fetchConfigSuccess = config => ({
  type: FETCH_CONFIG_SUCCESS,
  config
});

export const fetchConfigError = error => ({
  type: FETCH_CONFIG_ERROR,
  error
});

export const setGenre = genre => ({
  type: SET_GENRE,
  genre
});

export const setSubgenre = subgenre => ({
  type: SET_SUBGENRE,
  subgenre
});

export const addSubgenre = () => ({
  type: ADD_SUBGENRE
});

// action creators
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

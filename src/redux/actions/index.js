import {
  FETCH_CONFIG_LOADING,
  FETCH_CONFIG_SUCCESS,
  FETCH_CONFIG_ERROR,
  SET_GENRE,
  SET_SUBGENRE,
  ENTER_SUBGENRE,
  LEAVE_SUBGENRE,
  SET_NEW_SUBGENRE,
  SET_INFO_FORM,
  SUBMIT_FORM_PENDING
  // SUBMIT_FORM
} from './types';

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

export const enterSubgenre = () => ({
  type: ENTER_SUBGENRE
});

export const leaveSubgenre = () => ({
  type: LEAVE_SUBGENRE
});

export const setNewSubgenre = (field, value) => ({
  type: SET_NEW_SUBGENRE,
  field,
  value
});

export const setInfoForm = (field, value) => ({
  type: SET_INFO_FORM,
  field,
  value
});

export const submitFormPending = () => ({
  type: SUBMIT_FORM_PENDING
});

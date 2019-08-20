import { FETCH_CONFIG_LOADING, FETCH_CONFIG_SUCCESS, FETCH_CONFIG_ERROR } from '../actions/types';

const initialState = {
  loading: false,
  config: [],
  error: null
};

const fetchConfig = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONFIG_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_CONFIG_SUCCESS:
      return {
        ...state,
        loading: false,
        config: action.config
      };
    case FETCH_CONFIG_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default fetchConfig;

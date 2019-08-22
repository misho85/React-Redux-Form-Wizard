import { SET_GENRE, RESET } from '../actions/types';

const initialState = null;

const pickGenre = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRE:
      return action.genre;
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default pickGenre;

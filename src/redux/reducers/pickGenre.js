import { SET_GENRE } from '../actions/types';

const initialState = null;

const pickGenre = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRE:
      return action.genre;
    default:
      return state;
  }
};

export default pickGenre;

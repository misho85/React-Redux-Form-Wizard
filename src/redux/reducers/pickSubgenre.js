import { SET_SUBGENRE } from '../actions/types';

const initialState = null;

const pickSubgenre = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBGENRE:
      return action.subgenre;
    default:
      return state;
  }
};

export default pickSubgenre;

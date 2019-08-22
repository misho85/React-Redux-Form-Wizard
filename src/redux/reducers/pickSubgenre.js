import { SET_SUBGENRE, RESET } from '../actions/types';

const initialState = null;

const pickSubgenre = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBGENRE:
      return action.subgenre;
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default pickSubgenre;

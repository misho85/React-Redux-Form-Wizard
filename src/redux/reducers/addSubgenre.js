import { ENTER_SUBGENRE, LEAVE_SUBGENRE, SET_NEW_SUBGENRE } from '../actions/types';

const initialState = {
  enterAddNew: false,
  data: {
    newSubgenre: '',
    checked: false
  }
};

// ako klikne na add new 'true'
// false ako ide na back dugme u stepu addSubgenre
const addSubgenre = (state = initialState, action) => {
  switch (action.type) {
    case ENTER_SUBGENRE:
      return {
        ...state,
        enterAddNew: true
      };
    case LEAVE_SUBGENRE:
      return {
        ...state,
        enterAddNew: false
      };
    case SET_NEW_SUBGENRE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.field]: action.value
        }
      };
    default:
      return state;
  }
};

export default addSubgenre;

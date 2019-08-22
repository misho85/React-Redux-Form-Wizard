import { ENTER_SUBGENRE, LEAVE_SUBGENRE, SET_NEW_SUBGENRE, RESET } from '../actions/types';

const initialState = {
  enterAddNew: false,
  fields: {
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
        fields: {
          ...state.fields,
          [action.field]: action.value
        }
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default addSubgenre;

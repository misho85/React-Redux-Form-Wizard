import { SET_INFO_FORM, RESET } from '../actions/types';
import { DateTime } from 'luxon';

const dt = DateTime.local();

const initialState = {
  fields: {
    bookTitle: '',
    author: '',
    isbn: '',
    publisher: '',
    date: dt.toLocaleString(),
    numOfPages: '',
    format: '',
    edition: '',
    editionLang: '',
    description: ''
  }
};

const infoForm = (state = initialState, action) => {
  switch (action.type) {
    case SET_INFO_FORM:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.fieldName]: action.fieldValue
        }
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default infoForm;

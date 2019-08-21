import {
  SET_BOOK_TITLE,
  SET_AUTHOR,
  SET_ISBN,
  SET_PUBLISHER,
  SET_DATE,
  SET_NUMBER_OF_PAGES,
  SET_FORMAT,
  SET_EDITION,
  SET_EDITION_LANG,
  SET_DESCRIPTION
} from '../actions/types';
import { DateTime } from 'luxon';

const dt = DateTime.local();

const initialState = {
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
};

const infoForm = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOK_TITLE:
      return {
        ...state,
        bookTitle: action.bookTitle
      };
    case SET_AUTHOR:
      return {
        ...state,
        author: action.author
      };
    case SET_ISBN:
      return {
        ...state,
        isbn: action.isbn
      };
    case SET_PUBLISHER:
      return {
        ...state,
        publisher: action.publisher
      };
    case SET_DATE:
      return {
        ...state,
        date: action.date
      };
    case SET_NUMBER_OF_PAGES:
      return {
        ...state,
        numOfPages: action.numOfPages
      };
    case SET_FORMAT:
      return {
        ...state,
        format: action.format
      };
    case SET_EDITION:
      return {
        ...state,
        edition: action.edition
      };
    case SET_EDITION_LANG:
      return {
        ...state,
        editionLang: action.editionLang
      };
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
};

export default infoForm;

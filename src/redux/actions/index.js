import {
  FETCH_CONFIG_LOADING,
  FETCH_CONFIG_SUCCESS,
  FETCH_CONFIG_ERROR,
  SET_GENRE,
  SET_SUBGENRE,
  ENTER_SUBGENRE,
  LEAVE_SUBGENRE,
  SET_NEW_SUBGENRE,
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

// Information form
export const setBookTitle = bookTitle => ({
  type: SET_BOOK_TITLE,
  bookTitle
});
export const setAuthor = author => ({
  type: SET_AUTHOR,
  author
});
export const setISBN = isbn => ({
  type: SET_ISBN,
  isbn
});
export const setPublisher = publisher => ({
  type: SET_PUBLISHER,
  publisher
});
export const setDate = date => ({
  type: SET_DATE,
  date
});
export const setNumberOfPages = numOfPages => ({
  type: SET_NUMBER_OF_PAGES,
  numOfPages
});
export const setFormat = format => ({
  type: SET_FORMAT,
  format
});
export const setEdition = edition => ({
  type: SET_EDITION,
  edition
});
export const setEditionLang = editionLang => ({
  type: SET_EDITION_LANG,
  editionLang
});
export const setDescription = description => ({
  type: SET_DESCRIPTION,
  description
});

import validator from 'validator';

export const validations = ({ ...args }) => descReq => {
  let errors = {
    bookTitle: '',
    author: '',
    isbn: '',
    publisher: '',
    numOfPages: '',
    format: '',
    edition: '',
    editionLang: '',
    description: ''
  };

  if (validator.isEmpty(args.bookTitle)) {
    errors = {
      ...errors,
      bookTitle: 'Book Title is required'
    };
  }

  if (validator.isEmpty(args.author)) {
    errors = {
      ...errors,
      author: 'Author is required'
    };
  }
  if (validator.isEmpty(args.isbn)) {
    errors = {
      ...errors,
      isbn: 'ISBN is required'
    };
  }
  if (validator.isEmpty(args.publisher)) {
    errors = {
      ...errors,
      publisher: 'Publisher is required'
    };
  }
  if (validator.isEmpty(args.numOfPages)) {
    errors = {
      ...errors,
      numOfPages: 'Number of pages is required'
    };
  }
  if (validator.isEmpty(args.format)) {
    errors = {
      ...errors,
      format: 'Format is required'
    };
  }
  if (validator.isEmpty(args.edition)) {
    errors = {
      ...errors,
      edition: 'Edition is required'
    };
  }
  if (validator.isEmpty(args.editionLang)) {
    errors = {
      ...errors,
      editionLang: 'Edition language is required'
    };
  }
  if (descReq) {
    if (validator.isEmpty(args.description)) {
      errors = {
        ...errors,
        description: 'Description language is required'
      };
    }
  }

  return errors;
};

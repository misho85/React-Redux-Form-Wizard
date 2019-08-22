import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { validations } from '../../validator';

// Redux
import { connect } from 'react-redux';
import { setInfoForm } from '../../redux/actions';
import { getInfoFormFields, getSubmitFormStatus } from '../../redux/selectors';

// Material UI
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { KeyboardDatePicker } from '@material-ui/pickers';

const FormControlS = styled(FormControl)`
  min-width: 100%;
`;

const FormControlS2 = styled(FormControl)`
  width: 210px;
  @media (min-width: 576px) {
    width: 266px;
  }
`;

const InputTitle = styled(Typography)`
  padding-bottom: 8px;
  padding-top: 24px;
  ${p =>
    p.error &&
    css`
      color: #f44336;
    `}
`;

// fake data
const data = {
  authors: ['author 1', 'author 2', 'author 3', 'author 4'],
  publishers: ['publisher 1', 'publisher 2', 'publisher 3', 'publisher 4'],
  formats: ['format 1', 'format 2', 'format 3', 'format 4'],
  languages: ['srpski', 'hrvatski', 'crnogorski', 'bosanski']
};

const Information = ({ setInfoForm, fields, submitStatus }) => {
  const [bookTitleLW, setbookTitleLW] = useState(0);
  const bookTitleRef = useRef(null);

  const [authorLW, setAuthorLW] = useState(0);
  const authorRef = useRef(null);

  const [isbnLW, setIsbnLW] = useState(0);
  const isbnRef = useRef(null);

  const [publisherLW, setPublisherLW] = useState(0);
  const publisherRef = useRef(null);

  const [numberLW, setNumberLW] = useState(0);
  const numberRef = useRef(null);

  const [formatLW, setFormatLW] = useState(0);
  const formatRef = useRef(null);

  const [editionLW, setEditionLW] = useState(0);
  const editionRef = useRef(null);

  const [editionLangLW, setEditionLangLW] = useState(0);
  const editionLangRef = useRef(null);

  const [descriptionLW, setDescriptionLW] = useState(0);
  const descriptionRef = useRef(null);

  useEffect(() => {
    setbookTitleLW(bookTitleRef.current.offsetWidth);
    setAuthorLW(authorRef.current.offsetWidth);
    setIsbnLW(isbnRef.current.offsetWidth);
    setPublisherLW(publisherRef.current.offsetWidth);
    setNumberLW(numberRef.current.offsetWidth);
    setFormatLW(formatRef.current.offsetWidth);
    setEditionLW(editionRef.current.offsetWidth);
    setEditionLangLW(editionLangRef.current.offsetWidth);
    setDescriptionLW(descriptionRef.current.offsetWidth);
  }, []);

  const handleChange = name => e => setInfoForm(name, e.target.value);

  const validator = validations(fields);
  const errorCheck = field => (validator[field] && submitStatus ? true : false);

  return (
    <Box py={4} px={4}>
      <Container maxWidth="md">
        <InputTitle variant="body2" error={errorCheck('bookTitle') * 1}>
          {errorCheck('bookTitle') ? validator.bookTitle : 'Book title'}
        </InputTitle>
        <FormControlS variant="outlined">
          <InputLabel ref={bookTitleRef} htmlFor="book-title" error={errorCheck('bookTitle')}>
            Book title
          </InputLabel>
          <OutlinedInput
            id="book-title"
            value={fields.bookTitle}
            onChange={handleChange('bookTitle')}
            labelWidth={bookTitleLW}
            error={errorCheck('bookTitle')}
          />
        </FormControlS>
        <InputTitle variant="body2" error={errorCheck('author') * 1}>
          {errorCheck('author') ? validator.author : 'Author'}
        </InputTitle>
        <FormControlS variant="outlined">
          <InputLabel ref={authorRef} htmlFor="author" error={errorCheck('author')}>
            Author
          </InputLabel>
          <Select
            value={fields.author}
            onChange={handleChange('author')}
            input={
              <OutlinedInput
                error={errorCheck('author')}
                labelWidth={authorLW}
                name="author"
                id="author"
              />
            }
          >
            {data.authors.map(author => (
              <MenuItem key={author} value={author}>
                {author}
              </MenuItem>
            ))}
          </Select>
        </FormControlS>
        <InputTitle variant="body2" error={errorCheck('isbn') * 1}>
          {errorCheck('isbn') ? validator.isbn : 'ISBN'}
        </InputTitle>
        <FormControlS variant="outlined">
          <InputLabel ref={isbnRef} htmlFor="isbn" error={errorCheck('isbn')}>
            ISBN
          </InputLabel>
          <OutlinedInput
            id="isbn"
            value={fields.isbn}
            onChange={handleChange('isbn')}
            labelWidth={isbnLW}
            error={errorCheck('isbn')}
          />
        </FormControlS>
        <InputTitle variant="body2" error={errorCheck('publisher') * 1}>
          {errorCheck('publisher') ? validator.publisher : 'Publisher'}
        </InputTitle>
        <FormControlS variant="outlined">
          <InputLabel ref={publisherRef} htmlFor="publisher" error={errorCheck('publisher')}>
            Publisher
          </InputLabel>
          <Select
            value={fields.publisher}
            onChange={handleChange('publisher')}
            input={
              <OutlinedInput
                error={errorCheck('publisher')}
                labelWidth={publisherLW}
                name="publisher"
                id="publisher"
              />
            }
          >
            {data.publishers.map(publisher => (
              <MenuItem key={publisher} value={publisher}>
                {publisher}
              </MenuItem>
            ))}
          </Select>
        </FormControlS>
        <InputTitle variant="body2">Date published</InputTitle>
        <KeyboardDatePicker
          value={fields.date}
          onChange={date => setInfoForm('date', date.toLocaleString())}
          autoOk
          variant="inline"
          inputVariant="outlined"
          format="MM/dd/yyyy"
          InputAdornmentProps={{ position: 'start' }}
        />
        <InputTitle variant="body2" error={errorCheck('numOfPages') * 1}>
          {errorCheck('numOfPages') ? validator.numOfPages : 'Number of pages'}
        </InputTitle>
        <FormControl variant="outlined">
          <InputLabel ref={numberRef} htmlFor="number" error={errorCheck('numOfPages')}>
            Number
          </InputLabel>
          <OutlinedInput
            id="number"
            value={fields.numOfPages}
            type="number"
            inputProps={{ min: '0', max: '5000', step: '1' }}
            onChange={handleChange('numOfPages')}
            labelWidth={numberLW}
            error={errorCheck('numOfPages')}
          />
        </FormControl>
        <InputTitle variant="body2" error={errorCheck('format') * 1}>
          {errorCheck('format') ? validator.format : 'Format'}
        </InputTitle>
        <FormControlS2 variant="outlined">
          <InputLabel ref={formatRef} htmlFor="format" error={errorCheck('format')}>
            Format
          </InputLabel>
          <Select
            value={fields.format}
            onChange={handleChange('format')}
            input={
              <OutlinedInput
                error={errorCheck('format')}
                labelWidth={formatLW}
                name="format"
                id="format"
              />
            }
          >
            {data.formats.map(format => (
              <MenuItem key={format} value={format}>
                {format}
              </MenuItem>
            ))}
          </Select>
        </FormControlS2>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          <Box pr={4}>
            <InputTitle variant="body2" error={errorCheck('edition') * 1}>
              {errorCheck('edition') ? validator.edition : 'Edition'}
            </InputTitle>
            <FormControlS2 variant="outlined">
              <InputLabel ref={editionRef} htmlFor="edition" error={errorCheck('edition')}>
                Edition
              </InputLabel>
              <OutlinedInput
                id="edition"
                value={fields.edition}
                onChange={handleChange('edition')}
                labelWidth={editionLW}
                error={errorCheck('edition')}
              />
            </FormControlS2>
          </Box>
          <div>
            <InputTitle variant="body2" error={errorCheck('editionLang') * 1}>
              {errorCheck('editionLang') ? validator.editionLang : 'Edition language'}
            </InputTitle>
            <FormControlS2 variant="outlined">
              <InputLabel
                ref={editionLangRef}
                htmlFor="edition-language"
                error={errorCheck('editionLang')}
              >
                Edition language
              </InputLabel>
              <Select
                value={fields.editionLang}
                onChange={handleChange('editionLang')}
                input={
                  <OutlinedInput
                    labelWidth={editionLangLW}
                    name="edition-language"
                    id="edition-language"
                    error={errorCheck('editionLang')}
                  />
                }
              >
                {data.languages.map(lang => (
                  <MenuItem key={lang} value={lang}>
                    {lang}
                  </MenuItem>
                ))}
              </Select>
            </FormControlS2>
          </div>
        </Box>
        <InputTitle variant="body2" error={errorCheck('description') * 1}>
          {errorCheck('description') ? validator.author : 'Description'}
        </InputTitle>
        <FormControlS variant="outlined">
          <InputLabel ref={descriptionRef} htmlFor="description" error={errorCheck('description')}>
            Description
          </InputLabel>
          <OutlinedInput
            id="description"
            value={fields.description}
            onChange={handleChange('description')}
            labelWidth={descriptionLW}
            multiline
            rows="4"
            error={errorCheck('description')}
          />
        </FormControlS>
      </Container>
    </Box>
  );
};

const mapStateToProps = state => ({
  fields: getInfoFormFields(state),
  submitStatus: getSubmitFormStatus(state)
});

export default connect(
  mapStateToProps,
  {
    setInfoForm
  }
)(Information);

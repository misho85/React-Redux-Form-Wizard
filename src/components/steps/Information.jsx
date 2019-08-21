import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Redux
import { connect } from 'react-redux';
import { setInfoForm } from '../../redux/actions';
import { getInfoFormFields } from '../../redux/selectors';

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
`;

// fake data
const data = {
  authors: ['author 1', 'author 2', 'author 3', 'author 4'],
  publishers: ['publisher 1', 'publisher 2', 'publisher 3', 'publisher 4'],
  formats: ['format 1', 'format 2', 'format 3', 'format 4'],
  languages: ['srpski', 'hrvatski', 'crnogorski', 'bosanski']
};

const Information = ({ setInfoForm, fields }) => {
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

  return (
    <Box py={4} px={4}>
      <Container maxWidth="md">
        <form>
          <InputTitle variant="body2">Book title</InputTitle>
          <FormControlS variant="outlined">
            <InputLabel ref={bookTitleRef} htmlFor="book-title">
              Book title
            </InputLabel>
            <OutlinedInput
              id="book-title"
              value={fields.bookTitle}
              onChange={handleChange('bookTitle')}
              labelWidth={bookTitleLW}
            />
          </FormControlS>
          <InputTitle variant="body2">Author</InputTitle>
          <FormControlS variant="outlined">
            <InputLabel ref={authorRef} htmlFor="author">
              Author
            </InputLabel>
            <Select
              value={fields.author}
              onChange={handleChange('author')}
              input={<OutlinedInput labelWidth={authorLW} name="author" id="author" />}
            >
              {data.authors.map(author => (
                <MenuItem key={author} value={author}>
                  {author}
                </MenuItem>
              ))}
            </Select>
          </FormControlS>
          <InputTitle variant="body2">ISBN</InputTitle>
          <FormControlS variant="outlined">
            <InputLabel ref={isbnRef} htmlFor="isbn">
              ISBN
            </InputLabel>
            <OutlinedInput
              id="isbn"
              value={fields.isbn}
              onChange={handleChange('isbn')}
              labelWidth={isbnLW}
            />
          </FormControlS>
          <InputTitle variant="body2">Publisher</InputTitle>
          <FormControlS variant="outlined">
            <InputLabel ref={publisherRef} htmlFor="publisher">
              Publisher
            </InputLabel>
            <Select
              value={fields.publisher}
              onChange={handleChange('publisher')}
              input={<OutlinedInput labelWidth={publisherLW} name="publisher" id="publisher" />}
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
          <InputTitle variant="body2">Number of pages</InputTitle>
          <FormControl variant="outlined">
            <InputLabel ref={numberRef} htmlFor="number">
              Number of pages
            </InputLabel>
            <OutlinedInput
              id="number"
              value={fields.numOfPages}
              type="number"
              onChange={handleChange('numOfPages')}
              labelWidth={numberLW}
            />
          </FormControl>
          <InputTitle variant="body2">Format</InputTitle>
          <FormControlS2 variant="outlined">
            <InputLabel ref={formatRef} htmlFor="format">
              Format
            </InputLabel>
            <Select
              value={fields.format}
              onChange={handleChange('format')}
              input={<OutlinedInput labelWidth={formatLW} name="format" id="format" />}
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
              <InputTitle variant="body2">Edition</InputTitle>
              <FormControlS2 variant="outlined">
                <InputLabel ref={editionRef} htmlFor="edition">
                  Edition
                </InputLabel>
                <OutlinedInput
                  id="edition"
                  value={fields.edition}
                  onChange={handleChange('edition')}
                  labelWidth={editionLW}
                />
              </FormControlS2>
            </Box>
            <div>
              <InputTitle variant="body2">Edition language</InputTitle>
              <FormControlS2 variant="outlined">
                <InputLabel ref={editionLangRef} htmlFor="edition-language">
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
          <InputTitle variant="body2">Description</InputTitle>
          <FormControlS variant="outlined">
            <InputLabel ref={descriptionRef} htmlFor="description">
              Description
            </InputLabel>
            <OutlinedInput
              id="description"
              value={fields.description}
              onChange={handleChange('description')}
              labelWidth={descriptionLW}
              multiline
              rows="4"
            />
          </FormControlS>
        </form>
      </Container>
    </Box>
  );
};

const mapStateToProps = state => ({
  fields: getInfoFormFields(state)
});

export default connect(
  mapStateToProps,
  {
    setInfoForm
  }
)(Information);

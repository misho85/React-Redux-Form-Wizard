import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { KeyboardDatePicker } from "@material-ui/pickers";

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

const authors = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

const publishers = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

const formats = ["format 1", "format 2", "format 3", "format 4"];

const languages = ["srpski", "hrvatski", "crnogorski", "bosanski"];

const Information = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookTitleLW, setbookTitleLW] = useState(0);
  const bookTitleRef = useRef(null);
  const handleChangeBookTitle = e => setBookTitle(e.target.value);

  const [authorName, setAuthorName] = useState("");
  const [authorLW, setAuthorLW] = useState(0);
  const authorRef = useRef(null);
  const handleChangeAuthor = e => setAuthorName(e.target.value);

  const [isbn, setIsbn] = useState("");
  const [isbnLW, setIsbnLW] = useState(0);
  const isbnRef = useRef(null);
  const handleChangeIsbn = e => setIsbn(e.target.value);

  const [publisherName, setPublisherName] = useState("");
  const [publisherLW, setPublisherLW] = useState(0);
  const publisherRef = useRef(null);
  const handleChangePublisher = e => setPublisherName(e.target.value);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = date => setSelectedDate(date);

  const [number, setNumber] = useState("");
  const [numberLW, setNumberLW] = useState(0);
  const numberRef = useRef(null);
  const handleChangeNumber = e => setNumber(e.target.value);

  const [formatName, setFormatName] = useState("");
  const [formatLW, setFormatLW] = useState(0);
  const formatRef = useRef(null);
  const handleChangeFormat = e => setFormatName(e.target.value);

  const [edition, setEdition] = useState("");
  const [editionLW, setEditionLW] = useState(0);
  const editionRef = useRef(null);
  const handleChangeEdition = e => setEdition(e.target.value);

  const [editionLang, setEditionLang] = useState("");
  const [editionLangLW, setEditionLangLW] = useState(0);
  const editionLangRef = useRef(null);
  const handleChangeEditionLang = e => setEditionLang(e.target.value);

  const [description, setDescription] = useState("");
  const [descriptionLW, setDescriptionLW] = useState(0);
  const descriptionRef = useRef(null);
  const handleChangeDescription = e => setDescription(e.target.value);

  useEffect(() => {
    setbookTitleLW(bookTitleRef.current.offsetWidth);
    setAuthorLW(authorRef.current.offsetWidth);
    setIsbnLW(isbnRef.current.offsetWidth);
    setPublisherLW(publisherRef.current.offsetWidth);
    setNumberLW(numberRef.current.offsetWidth);
    setFormatLW(formatRef.current.offsetWidth);
    setEditionLW(editionRef.current.offsetWidth);
    setEditionLangLW(editionRef.current.offsetWidth);
    setDescriptionLW(descriptionRef.current.offsetWidth);
  }, []);

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
              value={bookTitle}
              onChange={handleChangeBookTitle}
              labelWidth={bookTitleLW}
            />
          </FormControlS>
          <InputTitle variant="body2">Author</InputTitle>
          <FormControlS variant="outlined">
            <InputLabel ref={authorRef} htmlFor="author">
              Author
            </InputLabel>
            <Select
              value={authorName}
              onChange={handleChangeAuthor}
              input={
                <OutlinedInput
                  labelWidth={authorLW}
                  name="author"
                  id="author"
                />
              }
            >
              {authors.map(author => (
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
              value={isbn}
              onChange={handleChangeIsbn}
              labelWidth={isbnLW}
            />
          </FormControlS>
          <InputTitle variant="body2">Publisher</InputTitle>
          <FormControlS variant="outlined">
            <InputLabel ref={publisherRef} htmlFor="publisher">
              Publisher
            </InputLabel>
            <Select
              value={publisherName}
              onChange={handleChangePublisher}
              input={
                <OutlinedInput
                  labelWidth={publisherLW}
                  name="publisher"
                  id="publisher"
                />
              }
            >
              {publishers.map(publisher => (
                <MenuItem key={publisher} value={publisher}>
                  {publisher}
                </MenuItem>
              ))}
            </Select>
          </FormControlS>
          <InputTitle variant="body2">Date published</InputTitle>
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            format="MM/dd/yyyy"
            value={selectedDate}
            InputAdornmentProps={{ position: "start" }}
            onChange={handleDateChange}
          />
          <InputTitle variant="body2">Number of pages</InputTitle>
          <FormControl variant="outlined">
            <InputLabel ref={numberRef} htmlFor="number">
              Number of pages
            </InputLabel>
            <OutlinedInput
              id="number"
              value={number}
              type="number"
              onChange={handleChangeNumber}
              labelWidth={numberLW}
            />
          </FormControl>
          <InputTitle variant="body2">Format</InputTitle>
          <FormControlS2 variant="outlined">
            <InputLabel ref={formatRef} htmlFor="format">
              Format
            </InputLabel>
            <Select
              value={formatName}
              onChange={handleChangeFormat}
              input={
                <OutlinedInput
                  labelWidth={formatLW}
                  name="format"
                  id="format"
                />
              }
            >
              {formats.map(format => (
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
                  value={edition}
                  onChange={handleChangeEdition}
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
                  value={editionLang}
                  onChange={handleChangeEditionLang}
                  input={
                    <OutlinedInput
                      labelWidth={editionLangLW}
                      name="edition-language"
                      id="edition-language"
                    />
                  }
                >
                  {languages.map(lang => (
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
              value={description}
              onChange={handleChangeDescription}
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

export default Information;

import React from 'react';
import styled, { css } from 'styled-components';

//Redux
import { connect } from 'react-redux';
import { setGenre } from '../../redux/actions';
import { getGenres, getPickGenre } from '../../redux/selectors';

// MUI
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const pick = css`
  background-color: #1976d2;
  color: white;
`;

const Field = styled(Button)`
  padding: 7px 12px;
  font-size: 0.5rem;
  flex-grow: 1;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: #1976d2;
    color: #fff;
  }
  @media screen and (min-width: 960px) {
    padding: 14px 60px;
    font-size: 0.8rem;
  }
  ${p => p.pick && pick};
`;

const Genre = ({ genres, pickGenre, setGenre }) => (
  <Box py={4} px={4}>
    <Container maxWidth="md">
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {[...Array(8).keys()].map(i => (
            <Grid key={i + 1} align="center" item xs={3}>
              <Field
                title={genres[i]}
                variant="outlined"
                disabled={!genres[i]}
                value={genres[i]}
                onClick={() => setGenre(genres[i])}
                pick={pickGenre === genres[i]}
              >
                {genres[i] ? `${genres[i]}` : `Genre ${i + 1}`}
              </Field>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const mapStateToProps = state => ({
  genres: getGenres(state),
  pickGenre: getPickGenre(state)
});

export default connect(
  mapStateToProps,
  { setGenre }
)(Genre);

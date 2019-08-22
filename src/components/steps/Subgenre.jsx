import React from 'react';
import styled, { css } from 'styled-components';

// Redux
import { connect } from 'react-redux';
import { setSubgenre, enterSubgenre, leaveSubgenre } from '../../redux/actions';
import { getPickSubgenre, getSubgenresNames, getAddSubgenreEnter } from '../../redux/selectors';

// MUI
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

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
  ${p =>
    p.pick &&
    css`
      background-color: #1976d2;
      color: white;
    `}
`;

const Subgenre = ({
  pickSubgenre,
  setSubgenre,
  subgenres,
  enterSubgenre,
  leaveSubgenre,
  enterAddNew
}) => (
  <Box py={4} px={4}>
    <Container maxWidth="md">
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {[...Array(7).keys()].map(i => (
            <Grid key={i + 1} align="center" item xs={3}>
              <Field
                title={subgenres[i]}
                variant="outlined"
                disabled={!subgenres[i]}
                value={subgenres[i]}
                onClick={() => {
                  setSubgenre(subgenres[i]);
                  leaveSubgenre();
                }}
                pick={(pickSubgenre === subgenres[i] && !enterAddNew) * 1}
              >
                {subgenres[i] ? `${subgenres[i]}` : `Subgenre ${i + 1}`}
              </Field>
            </Grid>
          ))}
          <Grid align="center" item xs={3}>
            <Field
              title="Add new"
              variant="outlined"
              pick={enterAddNew * 1}
              onClick={() => enterSubgenre()}
            >
              Add new
            </Field>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const mapStateToProps = state => ({
  pickSubgenre: getPickSubgenre(state),
  subgenres: getSubgenresNames(state),
  enterAddNew: getAddSubgenreEnter(state)
});

export default connect(
  mapStateToProps,
  { setSubgenre, enterSubgenre, leaveSubgenre }
)(Subgenre);

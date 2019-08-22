import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const ResetButton = styled(Button)`
  padding: 14px 150px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: #1976d2;
    color: #fff;
  }
`;

const Check = withStyles({
  root: {
    width: '15rem',
    height: '15rem'
  }
})(CheckCircle);

const Success = ({ handleReset }) => (
  <>
    <Box display="flex" justifyContent="center">
      <Check />
    </Box>
    <Box display="flex" justifyContent="center">
      <Typography>Book added successfuly</Typography>
    </Box>
    <Box display="flex" justifyContent="center" py={6}>
      <ResetButton variant="contained" onClick={handleReset}>
        Add another book
      </ResetButton>
    </Box>
  </>
);

export default Success;

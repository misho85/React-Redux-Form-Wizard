import React from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Form from './components/Form';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';

const theme = createMuiTheme({
  overrides: {
    MuiStepConnector: {
      alternativeLabel: {
        '@media (min-width:780px)': {
          top: 22,
          left: 'calc(-50% + 40px)',
          right: 'calc(50% + 40px)'
        },
        top: 12,
        left: 'calc(-50% + 22px)',
        right: 'calc(50% + 22px)'
      },
      active: {
        '& $line': {
          borderColor: '#784af4'
        }
      },
      completed: {
        '& $line': {
          borderColor: '#784af4'
        }
      },
      line: {
        height: 3,
        border: 0,
        borderColor: '#eaeaf0',
        borderRadius: 1,
        transition: 'border-color .2s ease-out'
      },
      lineHorizontal: {
        borderTopWidth: '3px'
      }
    }
  }
});

const App = () => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <MuiPickersUtilsProvider utils={LuxonUtils}>
          <Form />
        </MuiPickersUtilsProvider>
      </Container>
    </ThemeProvider>
  </StylesProvider>
);

export default App;

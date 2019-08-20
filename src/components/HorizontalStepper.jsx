import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import StepIcon from '@material-ui/core/StepIcon';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Genre, Subgenre, AddNewSubgenre, Information, Success } from './steps';
import { getPickGenre } from '../redux/selectors';

const btn = css`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: #1976d2;
    color: #fff;
  }
`;

const BackButton = styled(Button)`
  ${btn}
  margin-right: 8px;
`;

const NextButton = styled(Button)`
  ${btn}
`;

const StepIconS = withStyles({
  root: {
    '@media (min-width:780px)': {
      width: '2em',
      height: '2em'
    },
    width: '1.2em',
    height: '1.2em',
    transition: 'all .2s ease-out'
  }
})(StepIcon);

const StepDots = () => <StepIconS icon={'...'} />;

const getStepContent = stepIndex => {
  switch (stepIndex) {
    case 0:
      return <Genre />;
    case 1:
      return <Subgenre />;
    case 2:
      return <AddNewSubgenre />;
    case 3:
      return <Information />;
    default:
      return 'Uknown stepIndex';
  }
};

const stepsAll = ['genre', 'subgenre', 'add new subgenre', 'information'];

const HorizontalStepper = ({ pickGenre }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getSteps = steps => {
    return activeStep < 2 ? steps.slice(0, 2) : steps;
  };

  const steps = getSteps(stepsAll);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box p={2}>
        <Typography gutterBottom>Add book - New book</Typography>
      </Box>
      <Stepper activeStep={activeStep} alternativeLabel connector={<StepConnector />}>
        {activeStep < steps.length &&
          steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={StepIconS}>{label}</StepLabel>
            </Step>
          ))}
        {activeStep < 2 && (
          <Step>
            <StepLabel StepIconComponent={StepDots} />
          </Step>
        )}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <Success handleReset={handleReset} />
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box display="flex" justifyContent="flex-end" px={6} py={4}>
              <BackButton variant="contained" disabled={activeStep === 0} onClick={handleBack}>
                Back
              </BackButton>
              <NextButton variant="contained" disabled={!pickGenre} onClick={handleNext}>
                {activeStep === stepsAll.length - 1 ? 'Finish' : 'Next'}
              </NextButton>
            </Box>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  pickGenre: getPickGenre(state)
});

export default connect(mapStateToProps)(HorizontalStepper);

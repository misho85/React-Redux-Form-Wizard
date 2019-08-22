import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { validations } from '../validator';

// Redux
import { connect } from 'react-redux';
import { submitFormPending, reset } from '../redux/actions';
import {
  getPickGenre,
  getPickSubgenre,
  getAddSubgenreEnter,
  getNewSubgenre,
  getInfoFormFields,
  getDescRequired,
  getSubgenres
} from '../redux/selectors';

// MUI
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

const stepsAll = ['genre', 'subgenre', 'add new subgenre', 'information'];

const HorizontalStepper = ({
  pickGenre,
  pickSubgenre,
  enterAddNew,
  newSubgenre,
  submitFormPending,
  infoFields,
  newSubgenreDescReq,
  allSubgenres,
  reset
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const getSteps = steps => {
    return activeStep < 2 ? steps.slice(0, 2) : steps;
  };

  const stepsCon =
    pickSubgenre && !enterAddNew ? stepsAll.filter((step, i) => step[i] !== step[2]) : stepsAll;

  const steps = getSteps(stepsCon);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    reset();
  };

  const handleSubmit = data => {
    console.group('FORM_DATA', data);
  };

  const dataForm = { genre: pickGenre, subgenre: pickSubgenre, ...infoFields };

  const handleAdd = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    submitFormPending();
    handleSubmit(dataForm);
  };

  const handleNextOrAdd = activeStep === stepsCon.length - 1 ? handleAdd : handleNext;

  // Information step validation
  const validator = descReq =>
    Object.values(validations(infoFields)(descReq)).every(el => (!el ? true : false));

  const subgenreDescReq = pickSubgenre
    ? allSubgenres.filter(subgenre => subgenre.name === pickSubgenre)[0].isDescriptionRequired
    : false;

  const validateInfoFormOldSubgenre = validator(subgenreDescReq);
  const validateInfoFormNewSubgenre = validator(newSubgenreDescReq);

  const getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return <Genre />;
      case 1:
        return <Subgenre />;
      case 2:
        return enterAddNew ? <AddNewSubgenre /> : <Information />;
      case 3:
        return enterAddNew ? <Information /> : 'Uknown stepIndex';
      default:
        return 'Uknown stepIndex';
    }
  };

  const nextBtnDisable =
    activeStep === 0 && pickGenre
      ? false
      : activeStep === 1 && (pickSubgenre || enterAddNew)
      ? false
      : activeStep === 2 && enterAddNew && newSubgenre
      ? false
      : activeStep === 2 && !enterAddNew && validateInfoFormOldSubgenre
      ? false
      : activeStep === 3 && enterAddNew && validateInfoFormNewSubgenre
      ? false
      : true;

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
              <NextButton variant="contained" disabled={nextBtnDisable} onClick={handleNextOrAdd}>
                {activeStep === stepsCon.length - 1 ? 'Add' : 'Next'}
              </NextButton>
            </Box>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  pickGenre: getPickGenre(state),
  pickSubgenre: getPickSubgenre(state),
  enterAddNew: getAddSubgenreEnter(state),
  newSubgenre: getNewSubgenre(state),
  infoFields: getInfoFormFields(state),
  newSubgenreDescReq: getDescRequired(state),
  allSubgenres: getSubgenres(state)
});

export default connect(
  mapStateToProps,
  { submitFormPending, reset }
)(HorizontalStepper);

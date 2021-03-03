import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import ButtonStep from './ButtonStep';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '50vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

function getSteps() {
  return [
    <ButtonStep buttonColor="#117A65" buttonLabel="Step 1" />,
    <ButtonStep buttonColor="#2874A6" buttonLabel="Step 2" />,
    <ButtonStep buttonColor="#9C640C" buttonLabel="Step 3" />,
  ];
}

function GetStepContent(stepIndex, handleChange, checked) {
  switch (stepIndex) {
    case 0:
      return <FirstStep />;
    case 1:
      return <SecondStep />;
    case 2:
      return <ThirdStep handleChange={handleChange} checked={checked} />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        style={{ backgroundColor: 'transparent' }}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <div className={classes.root}>
          <CssBaseline />
          <Container component="main" className={classes.main} maxWidth="lg">
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button
                  startIcon={<RotateLeftIcon />}
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </CardContent>
            </Card>
          </Container>
        </div>
      ) : (
        <div>
          <div className={classes.instructions}>
            {GetStepContent(activeStep, handleChange, checked)}
          </div>
          <div>
            <Button
              size="large"
              startIcon={<SkipPreviousIcon />}
              variant="contained"
              color="primary"
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              Back
            </Button>
            <Button
              disabled={activeStep === steps.length - 1 && !checked}
              size="large"
              endIcon={
                  activeStep === steps.length - 1 ? (
                    <CheckCircleIcon />
                  ) : (
                    <SkipNextIcon />
                  )
                }
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

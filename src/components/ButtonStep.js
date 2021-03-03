/* eslint-disable no-nested-ternary */
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GroupIcon from '@material-ui/icons/Group';
import BusinessIcon from '@material-ui/icons/Business';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ButtonStep(props) {
  const classes = useStyles();
  const { buttonLabel, buttonColor } = props;

  return (
    <div className={classes.root}>
      <Button
        // eslint-disable-next-line no-nested-ternary
        startIcon={
          buttonLabel === 'Step 1' ? (
            <GroupIcon />
          ) : buttonLabel === 'Step 2' ? (
            <BusinessIcon />
          ) : buttonLabel === 'Step 3' ? (
            <FlightTakeoffIcon />
          ) : (
            ''
          )
        }
        style={{ backgroundColor: buttonColor }}
        size="large"
        variant="contained"
      >
        {buttonLabel}
      </Button>
    </div>
  );
}

export default ButtonStep;

ButtonStep.propTypes = {
  buttonLabel: PropTypes.string,
  buttonColor: PropTypes.string,
};

ButtonStep.defaultProps = {
  buttonLabel: '',
  buttonColor: '',
};

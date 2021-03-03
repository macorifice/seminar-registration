import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const { placeholder } = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        size="small"
        placeholder={placeholder}
        id="attendee-field"
        variant="outlined"
      />
    </form>
  );
}

BasicTextFields.propTypes = {
  placeholder: PropTypes.string,
};

BasicTextFields.defaultProps = {
  placeholder: '',
};

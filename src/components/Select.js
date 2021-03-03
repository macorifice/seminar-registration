import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const { attendee, setAttendee } = props;

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          labelId="select-attendee-label"
          id="select-attendee"
          value={attendee}
          onChange={setAttendee}
        >
          <MenuItem value="">
            <em>Plase Choose</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

SimpleSelect.propTypes = {
  attendee: PropTypes.number,
  setAttendee: PropTypes.func,
};

SimpleSelect.defaultProps = {
  attendee: 0,
  setAttendee: () => {},
};

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import _ from 'lodash';
import Select from './Select';
import Textfield from './Textfield';

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
}));

function FirstStep() {
  const classes = useStyles();

  const [attendee, setAttendee] = React.useState('');

  const handleChange = (event) => {
    setAttendee(event.target.value);
  };

  const fields = [];
  _.times(attendee, (i) => {
    fields.push(<Textfield placeholder={`Attendee ${i + 1} Name`} />);
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="lg">
        <Typography variant="h5" component="h2" gutterBottom>
          How many people will be attending ?
        </Typography>
        <Select attendee={attendee} setAttendee={handleChange} />
        {attendee
        && (
        <>
          <Typography variant="h5" component="h2" gutterBottom>
            Please provide full names:
          </Typography>
          {fields}
        </>
        )}
      </Container>
    </div>
  );
}

export default FirstStep;

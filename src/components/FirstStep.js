import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import _ from 'lodash';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Textfield from './Textfield';
import Select from './Select';

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
  card: {
    backgroundColor: '#117A65',
  },
  title: {
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
}));

function FirstStep() {
  const classes = useStyles();

  const [attendee, setAttendee] = useState('');

  const handleChange = (event) => {
    setAttendee(event.target.value.toString());
  };

  const fields = [];
  _.times(attendee, (i) => {
    fields.push(<Textfield key={i} placeholder={`Attendee ${i + 1} Name`} />);
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="lg">
        <Card className={classes.card}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography className={classes.title} gutterBottom>
                    How many people will be attending ?
                  </Typography>
                </Paper>
                <Paper className={classes.paper}>
                  <Select attendee={attendee} setAttendee={handleChange} />
                  {attendee && (
                    <>
                      <Grow
                        style={{ transformOrigin: '0 0 0' }}
                        in
                        timeout="auto"
                      >
                        <Typography className={classes.title} gutterBottom>
                          Please provide full names:
                        </Typography>
                      </Grow>
                      {fields}
                    </>
                  )}
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default FirstStep;

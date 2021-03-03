import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Stepper from './Stepper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                color="secondary"
                variant="h2"
                component="h1"
                gutterBottom
                style={{ fontFamily: 'cursive', fontWeight: 'lighter' }}
              >
                Seminar
              </Typography>
              <Typography
                color="primary"
                variant="h2"
                component="h1"
                gutterBottom
                style={{
                  fontFamily: 'cursive',
                  fontWeight: 'bolder',
                  letterSpacing: 1.75,
                }}
              >
                Registration
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Stepper />
      </Container>
    </div>
  );
}

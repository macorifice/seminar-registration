import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '50vh',
  },
  card: {
    backgroundColor: '#9C640C',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
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

function ThirdStep(props) {
  const classes = useStyles();
  const { checked, handleChange } = props;

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
                    Are you ready to rock ?
                  </Typography>
                </Paper>
                <FormGroup className={classes.formControl}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <FormControlLabel
                        control={(
                          <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            name="lastStep"
                          />
                        )}
                      />
                    </Paper>
                  </Grid>
                </FormGroup>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default ThirdStep;

ThirdStep.propTypes = {
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
};

ThirdStep.defaultProps = {
  checked: false,
  handleChange: () => {},
};

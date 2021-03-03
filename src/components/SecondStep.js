import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

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
    backgroundColor: '#2874A6',
  },
  title: {
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
}));

function SecondStep() {
  const classes = useStyles();
  const [checkedA, setCheckedA] = useState(false);
  const [checkedB, setCheckedB] = useState(false);
  const [checkedC, setCheckedC] = useState(false);
  const [checkedD, setCheckedD] = useState(false);

  const handleChangeFirst = (event) => {
    if (event.target.name === 'yes') {
      setCheckedA(!checkedA);
    } else {
      setCheckedB(!checkedB);
    }
  };

  const handleChangeSecond = (event) => {
    if (event.target.name === 'yes') {
      setCheckedC(!checkedC);
    } else {
      setCheckedD(!checkedD);
    }
  };

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
                    Would you like your company name on your badges ?
                  </Typography>
                </Paper>
                <FormGroup className={classes.formControl}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <FormControlLabel
                        disabled={checkedB}
                        control={(
                          <Checkbox
                            checked={checkedA}
                            onChange={handleChangeFirst}
                            name="yes"
                          />
                        )}
                        label="Yes"
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <FormControlLabel
                        disabled={checkedA}
                        control={(
                          <Checkbox
                            checked={checkedB}
                            onChange={handleChangeFirst}
                            name="no"
                          />
                        )}
                        label="No"
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      {checkedA && (
                      <form noValidate autoComplete="off">
                        <Grow style={{ transformOrigin: '0 0 0' }} in timeout="auto">
                          <TextField
                            size="small"
                            placeholder="Company name"
                            id="company-field"
                            variant="outlined"
                          />
                        </Grow>
                      </form>
                      )}
                    </Paper>
                  </Grid>
                </FormGroup>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography className={classes.title} gutterBottom>
                  Will anyone in your group require special accommodations ?
                </Typography>
              </Paper>
              <FormGroup className={classes.formControl}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <FormControlLabel
                      disabled={checkedD}
                      control={(
                        <Checkbox
                          checked={checkedC}
                          onChange={handleChangeSecond}
                          name="yes"
                        />
                      )}
                      label="Yes"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <FormControlLabel
                      disabled={checkedC}
                      control={(
                        <Checkbox
                          checked={checkedD}
                          onChange={handleChangeSecond}
                          name="no"
                        />
                      )}
                      label="No"
                    />
                  </Paper>
                </Grid>
              </FormGroup>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default SecondStep;

import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

  const [valueFirst, setValueFirst] = useState('');
  const [valueSecond, setValueSecond] = useState('');

  const handleChangeFirst = (event) => {
    setValueFirst(event.target.value);
  };

  const handleChangeSecond = (event) => {
    setValueSecond(event.target.value);
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
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Would you like your company name on your badges ?
                    </FormLabel>
                    <RadioGroup
                      aria-label="first"
                      name="first"
                      value={valueFirst}
                      onChange={handleChangeFirst}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Paper>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    {valueFirst === 'yes' && (
                      <form noValidate autoComplete="off">
                        <Grow
                          style={{ transformOrigin: '0 0 0' }}
                          in
                          timeout="auto"
                        >
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
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Will anyone in your group require special accommodations ?
                  </FormLabel>
                  <RadioGroup
                    aria-label="second"
                    name="second"
                    value={valueSecond}
                    onChange={handleChangeSecond}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Paper>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default SecondStep;

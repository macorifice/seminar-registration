import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

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
        <Typography variant="h5" component="h2" gutterBottom>
          Would you like your company name on your badges ?
        </Typography>
        <FormGroup>
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
        </FormGroup>
        {checkedA && (
          <form noValidate autoComplete="off">
            <TextField
              placeholder="Company name"
              id="company-field"
              variant="outlined"
            />
          </form>
        )}
        <Typography variant="h5" component="h2" gutterBottom>
          Will anyone in your group require special accommodations ?
        </Typography>
        <FormGroup>
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
        </FormGroup>
      </Container>
    </div>
  );
}

export default SecondStep;

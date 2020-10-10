import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

import "fontsource-roboto";

import "./App.css";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #fe6b8b, #ff8e53)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[400],
    },
  },
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample(params) {
  const [checked, checkedSet] = useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => checkedSet(e.target.checked)}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label="Testing Checkbox"
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar secondary>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                  <Typography variant="h6">MUI Theming</Typography>
                  <Button>Login</Button>
                </IconButton>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">Learn how to use MUI</Typography>
            <ButtonStyled />

            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }}>hi</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: "100%" }}>hi</Paper>
              </Grid>
              <Grid item xs={3} lg={12}>
                <Paper style={{ height: 75, width: "100%" }}>hi</Paper>
              </Grid>
            </Grid>

            <TextField
              variant="filled"
              color="secondary"
              type="email"
              label="the time"
              placeholder="testing@time.com"
            />
            <TextField
              variant="filled"
              color="secondary"
              type="date"
              label="the date"
              placeholder="testing@time.com"
            />
            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button startIcon={<DeleteIcon />} variant="contained">
                Discard
              </Button>
            </ButtonGroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;

// HOMEPAGE
import React from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar'
import { Router, Route, Link, BrowserRouter, Switch } from "react-router-dom";
import Events from './components/Events'
import Home from './components/Home'

import './App.css';
import About from './components/About';

// TO DO
// Refactor code on this page - put styles in .css file
// Create folder for images
//Create READ ME file

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  purpleBox: {
    width: "55%",
    float: "left",
    marginLeft: "-5rem",
  },
  bigGraphic: {
    float: "right",
    width: "80%",
    marginRight: "-12rem",
    marginLeft: "-7rem"
    // marginTop: "-rem",
  },
  aboutSection: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
    backgroundColor: "#A288E3",
    marginTop: "1.2rem",
    paddingBottom: "10px"
  },
  aboutLabel: {
    marginTop: "1rem",
    paddingTop: "2rem",
    color: "#ffff"
  },
  aboutText: {
    marginTop: "2.1rem",
    fontSize: "20px",
    paddingLeft: "25px",
    paddingRight: "25px",
    color: "#ffff",
    paddingBottom: "10px",
    marginBottom: "1rem"
  },
  aboutButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30px",
    padding: "0 20px",
    boxSizing: "border-box",
    borderRadius: 4,
    background: "#383F51",
    color: "#fff",
    transform: "none",
    marginLeft: "425px",
    marginBottom: "30px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#4f25f7"
    },
  },
  resourcesSection: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
    paddingTop: "2rem",
    color: "#383F51"
  },
  resourcesLabel: {
    color: "#383F51",
    float: "left",
    marginLeft: "100px",
  },
  resourcesFirstText: {
    paddingTop: "20px",
    marginTop: "2.1rem",
    fontSize: "20px",
    paddingLeft: "100px",
    paddingRight: "25px",
    color: "#E6B1D9",
    textAlign: 'left'
  },
  resourcesSecondText: {
    paddingTop: "20px",
    fontSize: "20px",
    paddingLeft: "100px",
    paddingRight: "25px",
    color: "#383F51",
    paddingBottom: "10px",
    marginBottom: "1rem",
    textAlign: 'left'
  },
  lightBulb: {
    width: "80%",
    float: "right",
    marginRight: "-10rem",
    marginTop: "-23rem"
  },
  resourcesButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30px",
    padding: "0 20px",
    boxSizing: "border-box",
    borderRadius: 4,
    background: "#383F51",
    color: "#fff",
    transform: "none",
    marginLeft: "100px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#4f25f7"
    },
  },
  supportSection: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
    marginTop: "2rem",
    paddingTop: "0.5rem",
    backgroundColor: "#383F51",
    paddingBottom: "30px"
  },
  supportLabel: {
    marginTop: "1rem",
    paddingTop: "2rem",
    color: "#ffff",
  },
  supportText: {
    marginTop: "2rem",
    fontSize: "20px",
    color: "#ffff",
  },
  supportButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30px",
    padding: "0 20px",
    marginTop: "20px",
    boxSizing: "border-box",
    borderRadius: 4,
    background: "#A288E3",
    color: "#fff",
    transform: "none",
    marginLeft: "425px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#4f25f7"
    },
  },
  footerImage: {
    width: "100%",
    height: "20%"
  },
  footerContainer: {
    color: "pink"
  },
  footerText: {
    color: "#383F51",
    position: "absolute",
    width: "100%",
    top: "1750px",
    right: "370px",
    fontSize: "0.9em",
    textAlign: "center",
    bottom: "0"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {
  const classes = styles();

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar />
          <Switch>
            <Route path="/events" exact component={Events} />
            <Route path="/about" exact component={About} />
            <Route path="/home" exact component={Home} />
            <Route path="/" exact component={Home} />
          </Switch>

        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
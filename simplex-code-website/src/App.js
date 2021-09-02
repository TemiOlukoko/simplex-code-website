// HOMEPAGE
import React from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Events from './components/Events'
import Home from './components/Home'
import About from './components/About';
import './App.css';
import NavbarTest from './components/NavbarTest';
import NavbarTestElements from './components/NavbarTestElements';


// TO DO:
// Styling for navbar
// Fix footer file code
// Create READ ME file

function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <NavbarTest/>
          <Switch>
            <Route path="/events" exact component={Events} />
            <Route path="/about" exact component={About} />
            <Route path="/home" exact component={Home} />
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
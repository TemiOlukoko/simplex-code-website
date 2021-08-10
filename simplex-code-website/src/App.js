
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import purpleBox from './purple-box-homepage-04.png'
import bigGraphic from './homepage-illu-01 (2).png'
import blobLightBulb from './blob-light-bulb-05.png'
import footerImage from './footer-pattern-03.jpg'

import CustomBtn from './components/CustomBtn'

// import Footer from './components/Footer'
import './App.css';
//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

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
    "&:hover": {
      backgroundColor: "#4f25f7"
    },
  },
  footerDesign: {
    width: "100%",
    height: "20%"
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
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        {/* <Grid icon={<SecurityIcon style={{ fill: "#4360A6", height: "125", width: "125" }} />} title="Secure" btnTitle="Show me More" />
        <Grid icon={<EventNoteIcon style={{ fill: "#449A76", height: "125", width: "125" }} />} title="Reliable" btnTitle="Show me More" />
        <Grid icon={<TrendingUpIcon style={{ fill: "#D05B2D", height: "125", width: "125" }} />} title="Performant" btnTitle="Show me More" /> */}
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <img src={purpleBox} className={classes.purpleBox} />
          <img src={bigGraphic} className={classes.bigGraphic} />
        </div>

        <div className={classes.aboutSection}>
          <Typography variant="h4" className={classes.aboutLabel} color="primary">
            About Us
          </Typography>
          <Typography variant="h5" className={classes.aboutText} color="primary">
            Welcome to SimplexCode, an educational-technology platform that gives <br></br>people in the early stages of their career the tools to
            navigate the tech industry <br></br>with confidence.
            We provide beginner-friendly tech-related resources, facilitate workshops <br></br>and classes and take part in panel discussions.
            <br></br>
            <br></br>
             We are open to providing services to schools, universities, private business and more. <br></br>If you would like to book one of our services,
             get in touch!
          </Typography>
          <button className={classes.aboutButton}>Read More</button>
        </div>

        <div className={classes.resourcesSection}>
          <Typography variant="h4" className={classes.resourcesLabel} color="#383F51">
            Resources
          </Typography>
          <Typography variant="h5" className={classes.resourcesFirstText} color="#383F51">
            Careers - Coding - Tech and more
          </Typography>
          <Typography variant="h5" className={classes.resourcesSecondText} color="#383F51">
            Here you'll find info sheets and
             <br></br>
             other helpful material to build
            <br></br>
            your understanding of the tech industry.
          </Typography>
          <button className={classes.resourcesButton}>
            Check Them Out
          </button>
        </div>
        <div>
          <img src={blobLightBulb} className={classes.lightBulb} />
        </div>

        <div className={classes.supportSection}>
          <Typography variant="h4" className={classes.supportLabel} color="primary">
            Support Us
          </Typography>
          <Typography variant="h5" className={classes.supportText} color="primary">
            We are trying to provide tech resources, workshops and coding
            <br></br>
            classes for underrepresented people who are trying to break into
            <br></br>
             the tech industry. SimplexCode consists of a team of enthusiastic
             <br></br>
             volunteers who make things run smoothly.
             <br></br>
             <br></br>
             With your donations, we'll be able to provide resources for those who need
             <br></br>
             it and ensure information surrounding tech industry is accessible.
          </Typography>
          <button className={classes.supportButton}>
            Donate to us!
          </button>
        </div>
        <div>
          <img src={footerImage} className={classes.footerDesign}/>
        </div>

      </ThemeProvider>
    </div>
  );
}

export default App;
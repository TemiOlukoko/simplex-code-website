import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import footerImage from '../images/footer-pattern-03.jpg'
import '../App.css';

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
      top: "1000px",
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

  function Footer() {
    const classes = styles();
  
    return (
        <div className="App">
          <ThemeProvider theme={theme}>

            <div className={classes.footerContainer}>
              {/* <Typography variant="h5" className={classes.footerText}>© 2021 SimplexCode</Typography> */}
              <img src={footerImage} className={classes.footerImage} />
            </div>
  
          </ThemeProvider>
        </div>
    );
  }

  export default Footer;
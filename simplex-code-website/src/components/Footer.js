import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import footerImage from '../images/footer-pattern-03.jpg';
import linkedinIcon from '../images/linkedin-icon.png';
import instagramIcon from '../images/instagram-icon.png';
import twitterIcon from '../images/twitter-icon.png';
import tiktokIcon from '../images/tiktok-icon.png';
import { Link } from "react-router-dom";

import '../App.css';
  
  const styles = makeStyles({
    App: {
      // marginBottom: -5
    },
    footerImage: {
      width: "100%",
      paddingBottom: "-10px"
    },
    
    copyright: {
      color: '#000',
      lineHeight: '0px',
      fontSize: '0.8em',
      textAlign: 'left',
      position: 'relative',
      top: '-100px',
      left: '50px',
    },
    socialMediaIcons: {
      width: "3%",
      marginRight: '50px',
      position: 'relative',
      top: '-70px',
      left: '80px',
    },
    firstSocialIcon: {
      width: "3%",
      marginRight: '50px',
      marginLeft: '450px',
      position: 'relative',
      top: '-70px',
      left: '80px',
    },
  })

  function Footer() {
    const classes = styles();
  
    return (
        <div className={classes.App}>

            <img src={footerImage} className={classes.footerImage} />

              <img src={linkedinIcon} className={classes.firstSocialIcon} />
              <img src={instagramIcon} className={classes.socialMediaIcons} />
              <img src={twitterIcon} className={classes.socialMediaIcons} />
              <img src={tiktokIcon} className={classes.socialMediaIcons} />

              <p className={classes.copyright}>© 2021 SimplexCode</p>

        </div>

    );
  }

  export default Footer;
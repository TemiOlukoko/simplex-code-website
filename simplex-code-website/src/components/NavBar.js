import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../purple-symbol-04-04.png'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Router, Route, Link, BrowserRouter, Switch } from "react-router-dom";
import Events from '../components/Events'
import '../App.css';
import Home from '../components/Home'
import About from '../components/About';


const styles = makeStyles({
    bar: {
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        color: '#383F51',
        textDecoration: 'none',
        // fontFamily: "'Montserrat', sans-serif",
        ['@media (max-width:780px)']: {
            flexDirection: "column"
        }
    },
    logo: {
        width: "5%",
        paddingRight: '20px',
        ['@media (max-width:780px)']: {
            display: "none"
        }
    },
    logoMobile: {
        width: "100%",
        display: "none",
        ['@media (max-width:780px)']: {
            display: "inline-block"
        }
    },
    navStyle: {
        color: '#383F51',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        fontSize: 15,
        "&:hover": {
            color: "#4f25c8"
        },
        ['@media (max-width:780px)']: {
            paddingBottom: "1rem"
        }
    }
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>

            <img src={logo} className={classes.logo} />

            <Link to="/events" className={classes.navStyle}>
                <Typography variant="h6" className={classes.menuItem}>
                    Events
                </Typography>
            </Link>

            <Typography variant="h6" className={classes.menuItem}>
                Resources
            </Typography>

            <Link className={classes.navStyle}>
                <Typography variant="h6" className={classes.menuItem}>
                    Services
                </Typography>
            </Link>

                <Typography variant="h6" className={classes.menuItem}>
                    Contact
                </Typography>

            <Link to="/about" className={classes.navStyle}>
                <Typography variant="h6" className={classes.menuItem}>
                    About
                </Typography>
            </Link>

            <CustomBtn txt="Donate" />
        </Toolbar>
    )
}

export default NavBar
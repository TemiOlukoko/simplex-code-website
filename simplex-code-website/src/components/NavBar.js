import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../purple-symbol-04-04.png'
import logoMobile from '../logoMobile.svg'
import simplex from '../purple-symbol-04-04.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        // fontFamily: "'Montserrat', sans-serif",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "5%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        fontSize: 15,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                {/* <img src={simplex} className={classes.simplex}/>  */}
                {/* <img src={logoMobile} className={classes.logoMobile}/>  */}
                <Typography variant="h6" className={classes.menuItem}>
                   Events
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Resources
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Services
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    About 
                </Typography>
                <CustomBtn txt="Donate"/>
            </Toolbar>
    )
}

export default NavBar
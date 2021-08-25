import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import logo from '../images/purple-symbol-04-04.png'


import {
    Nav,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarTestElements';

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
    navBarLink: {
        margin: '20px',
      },
      logo: {
        width: "20%",
        float: 'left',
        paddingLeft: '25px',
        ['@media (max-width:780px)']: {
            display: "none"
        }
    },
})
const NavbarTest = () => {
    const classes = styles()

    return(
        <>
        <Nav>
            <NavLink to="/">
            <img src={logo} className={classes.logo} />
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/about" activeStyle className={classes.navBarLink}>
                    About
                </NavLink>
                <NavLink to="/resources" activeStyle className={classes.navBarLink}>
                    Resources
                </NavLink>
                <NavLink to="/events" activeStyle className={classes.navBarLink}>
                    Events
                </NavLink>
                <NavLink to="/services" activeStyle className={classes.navBarLink}>
                    Services
                </NavLink>
                <NavLink to="/contact" activeStyle className={classes.navBarLink}>
                    Contact
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}

export default NavbarTest;
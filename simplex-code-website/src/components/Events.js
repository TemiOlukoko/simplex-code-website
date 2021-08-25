//EVENTS PAGE
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cheetahCode from '../images/SimplexCheetah.png';
import collabLab from '../images/SimplexCollabLab.png';
import {Link} from "react-router-dom";
import Footer from './Footer';

const styledEvents = makeStyles ({
    heading: {
        color: '#383F51',
        fontSize: '15px'
    },
    mainText: {
        color: '#383F51',
        marginTop: "1.8rem",
        fontSize: 16,
        lineHeight: '0.2rem',
        marginBottom: '2.0rem'
    },
    EventImage:{
        width: '30%',
        marginTop: '20px',
        float: "left",
        marginLeft: "12rem",
        borderRadius: '25px',
    },
    EventPinkText:{
        marginLeft: '29rem',
        paddingTop: '0.8rem',
        color: '#E6B1D9',
        fontSize: '18px',
        textAlign: 'left'
    },
    EventMainText:{
        marginLeft: '29rem',
        color: '#383F51',
        fontSize: '18px',
        lineHeight: '0.3rem',
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: '0rem'

    },
    EventDateText: {
        marginLeft: '31.5rem',
        textAlign: 'left',
        color: '#E6B1D9',
        marginTop: '0rem',
        fontSize: '12px',
    },
    EventDescriptionText: {
        marginLeft: '29rem',
        textAlign: 'left',
        color: '#383F51',
        lineHeight: '0.4rem',
        fontSize: 16,
        marginTop: '-0.7rem', 
    },
    signUpButton: {
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
        marginLeft: "502px",
        marginBottom: '65px',
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#4f25f7"
        },
      },
})

function Events(){
    const classes = styledEvents();
    return (
        <div className="App">
        <div className={classes.heading}>
            <h1>Events</h1>
        </div>

        <div className={classes.mainText}>
            <ul>We've got some informative and inspiring events lined up just for you!</ul>
            <ul> Take a look below and see which ones you would like to attend.</ul>
            <ul></ul>
        </div>

        {/* SimplexCode & Collab Lab */}
        <img src={collabLab} className={classes.EventImage}/>

        <div className={classes.EventPinkText}>
            <ul>SimplexCode x The Collab Lab</ul>
        </div>

        <div className={classes.EventMainText}>
            <ul>Navigating Your First Developer Job</ul>
        </div>

        <h6 className={classes.EventDateText}>
            Monday 28th of July at 6:30pm BST
        </h6>

        <div className={classes.EventDescriptionText}>
            <ul>SimplexCode teams up with The Collab Lab </ul>
            <ul>Academy to provide you with insight into how to </ul>
            <ul>successfully navigate your first professional </ul>
            <ul>developer role</ul>
        </div>

        <button className={classes.signUpButton}>
              Sign up
        </button>

        {/* SimplexCode & Cheetah Code Academy */}
        {/* <img src={cheetahCode} className={classes.EventImage}/>
        
        <div className={classes.EventPinkText}>
            <ul>SimplexCode x Cheetah Code Academy</ul>
        </div>

        <div className={classes.EventMainText}>
            <ul>Navigating Your First Developer Job</ul>
        </div>

        <h6 className={classes.EventDateText}>
            Monday 26th of July at 7pm BST
        </h6>

        <div className={classes.EventDescriptionText}>
            <ul>SimplexCode teams up with Cheetah Code </ul>
            <ul>Academy to provide you with insight into how to </ul>
            <ul>successfully navigate your first professional </ul>
            <ul>developer role</ul>
        </div>

        <button className={classes.signUpButton}>
              Sign up
        </button> */}

        <Footer/>
        </div>
    );
}

export default Events;

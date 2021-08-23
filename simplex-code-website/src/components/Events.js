//EVENTS PAGE
import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const styledEvents = makeStyles ({
    heading: {
        color: '#383F51',
        fontSize: '15px'
    },
    mainText: {
        color: '#383F51',
        marginTop: "2.1rem",
    }
})

function Events(){
    const classes = styledEvents();
    return (
        <div className="App">
        <div className={classes.heading}>
            <h1>Events</h1>
        </div>

        <div className={classes.mainText}>
            <h4>We've got some informative and inspiring events</h4>
            <h4>lined up just for you! Take a look below and see</h4>
            <h4>which ones you'd like to attend.</h4>
        </div>

        </div>
    );
}

export default Events;

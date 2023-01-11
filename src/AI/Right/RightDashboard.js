import React from "react";
import { makeStyles } from '@mui/styles';
import Chat from "./Chat";
const useStyles = makeStyles({
    root: {
        width: '20rem',
        backgroundColor: '#1798c1',
        // display: 'flex',
        // justifyContent: 'space-between',
        // alignContent: 'center',
        // flexWrap: 'wrap',
        // backgroundColor: '#282c34',
        // height: '100vh',
        // flexdirection: 'row',
    },
});
const RightDashboard = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Chat/>
        </div>
    )
}

export default RightDashboard;
import React from "react";
import { makeStyles } from '@mui/styles';
 
const useStyles = makeStyles({
    root: {
        width: '20rem',
        backgroundColor: '#FFc0cb',
        // display: 'flex',
        // justifyContent: 'space-between',
        // alignContent: 'center',
        // flexWrap: 'wrap',
        // backgroundColor: '#282c34',
        // height: '100vh',
        // flexdirection: 'row',
    },
});
const LeftDashboard = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>

        </div>
    )
}

export default LeftDashboard;
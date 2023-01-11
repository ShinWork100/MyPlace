import React from "react";
import { makeStyles } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
    root: {
        width: '15rem',
        height:'30rem',
        backgroundColor: '#1798c1',
        border: 'solid #FFc0cb',
        // display: 'flex',
        // justifyContent: 'space-between',
        // alignContent: 'center',
        // flexWrap: 'wrap',
        // backgroundColor: '#282c34',
        // height: '100vh',
        // flexdirection: 'row',
    },
    textField: {
        backgroundColor: 'white',
        border: 'solid #FFc0cb',
    }
});
const Chat = () =>{
    const classes = useStyles();
    return(
        <Box className={classes.root}>
            <div><ChatIcon/></div>
            <div>
                <TextField className={classes.textField}/>
                <SendIcon/>
            </div>
        </Box>
    )
}

export default Chat;
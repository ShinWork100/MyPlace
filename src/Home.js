import React from "react";
import './App.css';
import Button from '@mui/material/Button';
import {Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    temp: {
        background: 'black',
        color: 'green'
    },
})

const Home = () => {
    const classes = useStyles();
    return (
     <nav className="App">
        <Link to="/AiMain" ><Button variant="contained">AI</Button></Link>
        <Link to="/TableMain"><Button variant="contained">Table</Button></Link>
     </nav>
    )
}
export default Home;
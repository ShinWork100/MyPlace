import Button from '@mui/material/Button';
import React, {useState} from 'react';
import './AiMain.css'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // backgroundColor: 'red',
    },
    buttonContainer: {
      color: 'red',
      backgroundColor: 'white',
    },
    button: {
        color: 'red',
    },
})
const createDefaultTabl=(size)=>{
    const arrCol = [];
    for (let i = 0; i < size; i++) {
        const arrRow = [];
        for (let j = 0; j < size; j++) {
            arrRow.push({
                status: false,
                row: j,
            });
        }
        arrCol.push({
            col: i,
            rowArr: arrRow
        });
    }
    return arrCol;
};

const AiMain = () => {
    const [table, setTable] = useState(createDefaultTabl(10));
    const classes = useStyles();

    const createButton = (m) =>{
        console.log(m);
        // onClick={setTable(...table, table[col.col][row.row].status = true)}
        return (
            <div className={classes.buttonContainer}>
                {m.rowArr.map( li => (<Button className={classes.button}>{li.row}</Button>))}
            </div>
        );
    }
    return (
        <div className="root">
            <div>
            {table.map( m => createButton(m))}
            </div>
        </div>
    )
}



export default AiMain;
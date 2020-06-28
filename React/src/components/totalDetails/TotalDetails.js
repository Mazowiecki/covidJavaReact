import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import './TotalDetails.css'
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const TotalDetails = props => {
    const classes = useStyles();
    const [infected, setInfected] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [recoveryRatio, setRecoveryRatio] = useState(0);


    useEffect(() => {
        let infected = 0;
        let recovered = 0;
        props.allData.forEach((item) => {
            infected += item.cases;
            recovered += item.recovered;
        });
        setInfected(infected);
        setRecovered(recovered);
        setRecoveryRatio(recovered / infected * 100);
    }, [props]);


    return (
        <Paper className='paperStyles' elevation={3}>
            <h2>Recovery total ratio:</h2>
            <div className='ratioFlex'>
                {recovered ? <p>Recovered: {recovered}</p> : <Skeleton variant="text" width={210}/>}
                {infected ? <p>Infected: {infected}</p> : <Skeleton variant="text" width={210}/>}
            </div>
            <div className={classes.root}>
                <LinearProgress variant="determinate" value={recoveryRatio} color="secondary"/>
            </div>
        </Paper>
    );
};

export default TotalDetails;

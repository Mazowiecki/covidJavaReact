import React from 'react';
import Paper from '@material-ui/core/Paper';
import './CountryDetails.css'

const CountryDetails = props => {
    return (
        <Paper className='paperStyles' elevation={3}>
            {props.details.country ? <h2>{props.details.country}</h2> : <h2>Country</h2>}
            <p>Active: {props.details.active}</p>
            <p>Recovered: {props.details.recovered}</p>
            <p>Cases: {props.details.cases}</p>
            {props.details.todayCases ? <p>Today cases: {props.details.todayCases}</p> : false}
            <p>Deaths: {props.details.deaths}</p>
            {props.details.todayDeaths ? <p>Today deaths: {props.details.todayDeaths}</p> : false}
        </Paper>
    );
};

export default CountryDetails;

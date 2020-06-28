import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './SelectCountry.css'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SelectCountry = props => {
    const [selectedCountry, setSelectedCountry] = useState([]);

    const classes = useStyles();

    const handleChange = event => {
        setSelectedCountry(event.target.value);
        props.handleSelectedCountry(event.target.value);
    };

    return (
        <Paper className='paperStyles' elevation={3}>
            <div className='selectFlex'>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Select country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedCountry}
                        onChange={handleChange}
                    >
                        {props.countries.map((countryData, index) => (
                            <MenuItem key={index} value={countryData}>{countryData.country}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <p>Select country to fill details below</p>
            </div>
        </Paper>
    );
};

SelectCountry.defaultProps = {
    countries: []
};

export default SelectCountry;

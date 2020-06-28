import React, {useState, useEffect} from 'react';
import './Dashboard.css'
import Container from '@material-ui/core/Container';
import CountryDetails from "../countryDetails/CountryDetails";
import TotalDetails from "../totalDetails/TotalDetails";
import Paper from '@material-ui/core/Paper';
import SelectCountry from "../selectCountry/SelectCountry";



const Dashboard = () => {
    const [countriesData, setCountriesData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = () => {
        fetch('http://localhost:3001/api/countries', {
            crossDomain: true,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(res => {
                setCountriesData(res.sort((a, b) => a.country.localeCompare(b.country)));
            });
    };

    const handleSetSelectedCountry = data => {
        setSelectedCountry(data);
    };

    return (
        <div className='dashboard'>
            <Container fixed>
                <Paper className='paperStyles' elevation={3}>
                    <h1>COVID-19 API Data</h1>
                </Paper>
                <div>
                    <TotalDetails allData={countriesData}/>
                </div>
                <div>
                    <SelectCountry countries={countriesData} handleSelectedCountry={handleSetSelectedCountry}/>
                </div>
                <div>
                    <CountryDetails details={selectedCountry}/>
                </div>

            </Container>
        </div>
    );
};

export default Dashboard;

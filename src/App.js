import React from 'react';

import { fetchData } from './api';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import covidLogo from './assets/image/covid-19.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }
    
    async componentDidMount() {
        const data = await fetchData();
        this.setState({data});
    }

    handleOnCountryChange = async (country) => {
        const response = await fetchData(country);
        this.setState({data:response, country});
    }

    render() {
        const { data, country } = this.state;
        return ( 
            <div className={styles.container}>
                <img className={styles.image} src={covidLogo} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleOnCountryChange={this.handleOnCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}
 
export default App;
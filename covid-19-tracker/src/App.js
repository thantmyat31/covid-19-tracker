import React from 'react';

import { fetchData } from './api';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

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
                <Cards data={data} />
                <CountryPicker handleOnCountryChange={this.handleOnCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}
 
export default App;
import React from 'react';

import { fetchData } from './api';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

class App extends React.Component {
    state = {
        data: {}
    }
    
    async componentDidMount() {
        const data = await fetchData();
        this.setState({data});
    }

    render() {
        const { data } = this.state;
        return ( 
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}
 
export default App;
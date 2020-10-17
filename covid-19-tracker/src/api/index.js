import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        return {confirmed, recovered, deaths, lastUpdate}
    } catch (err) {
        console.log('[Fetch data error]:', err);
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map(d => ({
            confirmed: d.confirmed.total,
            deaths: d.deaths.total,
            date: d.reportDate
        }))
        return modifiedData;
    } catch (err) {
        console.log('[Fetch daily data error]:', err);
    }
}

export const countries = async () => {
    try {
        const data = await axios.get(`${url}/countries`);
        console.log(data)
    } catch(err) {
        console.log('[Countries error]:', err)
    }
}
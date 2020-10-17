import React, { useState, useEffect } from 'react';

import { fetchDailyData } from '../../api';
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
	const [ dailyData, setDailyData ] = useState([]);

	useEffect(() => {
		fetchAPI();
	}, []);

	const fetchAPI = async () => {
		const response = await fetchDailyData();
		setDailyData(response);
	};

	const lineChart = dailyData.length ? (
		<Line
			data={{
				labels: dailyData.map(({date}) => date),
				datasets: [
					{
						data: dailyData.map(({ confirmed }) => confirmed),
						label: 'Infected',
						borderColor: '#3333ff',
						fill: true
					},
					{
						data: dailyData.map(({ deaths }) => deaths),
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(250, 0, 0, 0.5)',
						fill: true
					}
				]
			}}
		/>
	) : null;

	return (
		<div className={styles.container}>
			{lineChart}
		</div>
	);
};

export default Chart;
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const CardComp = ({ title, value, date, text, className }) => {
	return (
		<Grid item xs={12} md={3} component={Card} className={className}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					{title}
				</Typography>
				<Typography variant="h5">
					<CountUp start={0} end={value} duration={2.5} separator="," />
				</Typography>
				<Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
				<Typography variant="body2">{text}</Typography>
			</CardContent>
		</Grid>
	);
};

export default CardComp;

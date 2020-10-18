import React from 'react';

import CardComp from './../CardComp/CardComp';

import { Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return 'Loading...';
	}
	return (
		<div className={styles.container}>
			<Grid container justify="center" spacing={3}>
                <CardComp
                    title="Infected"
                    value={confirmed.value}
                    date={lastUpdate}
                    text="Number of active case of COVID - 19"
                    className={cx(styles.card, styles.confirmed)}
                />
                <CardComp
                    title="Recovered"
                    value={recovered.value}
                    date={lastUpdate}
                    text="Number of recoveries of COVID - 19"
                    className={cx(styles.card, styles.recovered)}
                />
                <CardComp
                    title="Deaths"
                    value={deaths.value}
                    date={lastUpdate}
                    text="Number of deaths of COVID - 19"
                    className={cx(styles.card, styles.deaths)}
                />
			</Grid>
		</div>
	);
};

export default Cards;

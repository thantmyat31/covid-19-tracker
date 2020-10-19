import React, { useState, useEffect } from 'react';

import { fetchCountries } from './../../api';

import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleOnCountryChange }) => {
	const [ countries, setCountries ] = useState();

	useEffect(() => {
		getCountries();
	},[]);

	const getCountries = async () => {
		const response = await fetchCountries();
		setCountries(response);
	}

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect defaultValue="" onChange={(ev) => handleOnCountryChange(ev.target.value)}>
				<option value="">Global</option>
				{
					countries && countries.map((c, index) => <option key={index.toString()} value={c.name}>{c.name}</option>)
				}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;

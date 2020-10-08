import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const settingCountries = async () => setCountries(await fetchCountries());
    settingCountries();
  }, []);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(event) => handleCountryChange(event.target.value)}
      >
        <option value="global">Global</option>
        {countries &&
          countries.map((country, index) => (
            <option key={`${country}_${index}`} value={country}>
              {country}
            </option>
          ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;

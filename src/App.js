import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

import covidImage from "./assets/covid-image.png";

import styles from "./App.module.css";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const settingData = async () => setData(await fetchData());
    settingData();
  }, []);

  const handleCountryChange = async (country) => {
    if (country === "global") {
      setData(await fetchData());
      setCountry("");
    } else {
      setData(await fetchData(country));

      setCountry(country);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.covid__image} src={covidImage} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;

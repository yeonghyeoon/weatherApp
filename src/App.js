import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./components/Weather/Weather";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
// api key
import { apiKey } from "./components/utilities/api";
function App() {
  const [city, setCity] = useState(""); // name
  const [weatherData, setWeatherData] = useState("");
  const [mainData, setMainData] = useState("");
  const [wind, setWind] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const getData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      .then((response) => {
        setWeatherData(response.data.weather[0]);
        setMainData(response.data.main);
        setWind(response.data.wind);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCity = (cityName) => {
    setCity(cityName);
  };
  return (
    <div className="App">
      <Header />
      <Search
        getData={getData}
        searchValue={searchValue}
        handleCity={handleCity}
      />
      <Weather weatherData={weatherData} mainData={mainData} wind={wind} />
    </div>
  );
}

export default App;

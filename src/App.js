import "./App.scss";
import React, { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather/Weather";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import City from "./components/City/City";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import { apiKey } from "./components/utilities/api";
import weatherImages from "./data/weatherImages.json";


function App() {
  const [city, setCity] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [mainData, setMainData] = useState("");
  const [wind, setWind] = useState("");
  const [time, setTime] = useState("");

  const getData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      .then((response) => {
        setWeatherData(response.data.weather[0]);
        setMainData(response.data.main);
        setWind(response.data.wind);
        setTime(response.data.timezone);
        setImgSrc(getImg(response.data.weather[0].main.toLowerCase()));
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCity = (cityName) => {
    setCity(cityName);
  };

  const getImg = (weatherIcon) => {
    let src;
    weatherImages.forEach((img) => {
      if (img.mainName === weatherIcon) {
        src = img.src;
        console.log(src);
      }
    });
    return src;
  };

  return (
    <div className="App">
      <Header />
      <Search getData={getData} handleCity={handleCity} />
      <div className="weather__card">
        <WeatherDisplay imgSrc={imgSrc} city={city} />
        <Weather weatherData={weatherData} mainData={mainData} wind={wind} time={time} city={city}/>
      </div>
    </div>
  );
}

export default App;
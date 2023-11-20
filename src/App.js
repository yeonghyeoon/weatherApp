import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/Weather/Weather";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import SaveCity from "./components/SaveCity/SaveCity";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import { apiKey } from "./components/utilities/api";
import nightSky from "../src/assets/images/nightSky.jpg";
import nightIcons from "./data/nightIcons.json";

function App() {
  const [city, setCity] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [mainData, setMainData] = useState("");
  const [wind, setWind] = useState("");
  const [time, setTime] = useState("");
  const [saveCity, setSaveCity] = useState("");
  const [saveCityData, setSaveCityData] = useState([]);
  const localURL = process.env.REACT_APP_URL;

  const getData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data.weather[0]);
        setMainData(response.data.main);
        setWind(response.data.wind);
        setTime(response.data.timezone);
        setImgSrc(getImg(response.data.weather[0].main.toLowerCase()));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // get image
  const getImg = (weatherIcon) => {
    let src;
    nightIcons.forEach((img) => {
      if (img.mainName === weatherIcon) {
        src = img.src;
        console.log(src);
      }
    });
    return src;
  };
  
  // handle current city
  const handleCity = (cityName) => {
    setCity(cityName);
  };

  // // handle city posting
  const handleCityPost = () => {
    if (city) {
      axios
        .post(`${localURL}/cities`, { city: city })
        .then((response) => {
          const responseCityId = response.data.id; // get posted city id
          const responseCityName = response.data.city; // get posted city name
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?q=${responseCityName}&appid=${apiKey}&units=metric`
            )
            .then((response) => {
              // storing posted city data into an object
              const cityData = {
                id: responseCityId,
                city: response.data.name,
                temp: response.data.main.temp,
                description: response.data.weather[0].description,
                windSpeed: response.data.wind.speed,
                windDegree: response.data.wind.deg,
              };
              // setting saveCityData with existing value
              setSaveCityData([...saveCityData, cityData]);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // getting city list from the
  useEffect(() => {
    axios
      .get(`${localURL}/cities`)
      .then((response) => {
        setSaveCity(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // getting save city weather data
  useEffect(() => {
    if (saveCity.length > 0) {
      const saveCityDataArray = [];
      saveCity.forEach((cityObject) => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityObject.city}&appid=${apiKey}&units=metric`
          )
          .then((response) => {
            const cityData = {
              id: cityObject.id,
              city: response.data.name,
              temp: response.data.main.temp,
              description: response.data.weather[0].description,
              windSpeed: response.data.wind.speed,
              windDegree: response.data.wind.deg,
            };
            saveCityDataArray.push(cityData);
          })
          .catch((err) => {
            console.log(err);
          });
      });
      setSaveCityData(saveCityDataArray); // set saveCityData
    }
  }, [saveCity]);

  let realTime = new Date();
  let realHour = realTime.getHours();
  console.log(realHour)
  const nightTime = {
    backgroundImage: `url("https://www.nps.gov/crmo/learn/nature/images/IMG_0373_1.jpg?maxwidth=650&autorotate=false")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white"
  }
  const dayTime = {
    backgroundImage: `url("https://www.ecolur.org/files/news/2023/02/022731150180.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  const checkHours = (realHour >= 17) ? nightTime : dayTime ;
  
  return (
    <div className="App" style={checkHours}>
      <Header />
      <div className="weather__background">
        <Search getData={getData} handleCity={handleCity} />
        <div className="weather__card">
          <WeatherDisplay imgSrc={imgSrc} city={city} />
          <Weather
            weatherData={weatherData}
            mainData={mainData}
            wind={wind}
            time={time}
            city={city}
            handleCityPost={handleCityPost}
          />
        </div>
      <SaveCity saveCityData={saveCityData.length > 0 ? saveCityData : ""} />
      </div>
    </div>
  );
}

export default App;

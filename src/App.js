import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/Weather/Weather";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import SaveCity from "./components/SaveCity/SaveCity";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import { apiKey } from "./components/utilities/api";
import nightIcons from "./data/nightIcons.json";
function App() {
  const [city, setCity] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [mainData, setMainData] = useState("");
  const [wind, setWind] = useState("");
  const [time, setTime] = useState("");
  const [saveCity, setSaveCity] = useState([]);
  const [saveCityData, setSaveCityData] = useState([]);
  const localURL = process.env.REACT_APP_URL;

  const getData = () => {
    if (!city) {
      alert("Please enter city name");
      return;
    } else {
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
    }
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

  // handle saved City data
  const handleSavedCity = (cityName) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setCity(cityName);
        setWeatherData(response.data.weather[0]);
        setMainData(response.data.main);
        setWind(response.data.wind);
        setTime(response.data.timezone);
        setImgSrc(getImg(response.data.weather[0].main.toLowerCase()));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle city posting
  const handleCityPost = () => {
    if (!city) {
      alert("Please enter city name");
      return;
    } else {
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
        .then(() => {
          return;
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    }
  };

  // handle city deleting
  const handleCityDelete = (cityId) => {
    axios
      .delete(`${localURL}/cities/${cityId}`)
      .then((response) => {
        setSaveCity(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // getting city list from the
  useEffect(() => {
    axios
      .get(`${localURL}/cities`)
      .then((response) => {
        setSaveCity(response.data);
        console.log(saveCity.length);
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
          .then(() => {
            setSaveCityData(saveCityDataArray); // set saveCityData
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }, [saveCity]);

  let realTime = new Date();
  let realHour = realTime.getHours();
  // console.log(realHour); // commenting out for testing
  const nightTime = {
    backgroundImage: `url("https://images.unsplash.com/photo-1666287415044-2b28ebd6f96f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  };
  const dayTime = {
    backgroundImage: `url("https://d12eu00glpdtk2.cloudfront.net/public/images/local/_760x500_clip_center-center_none/qatar-weather_200526_064356.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const checkHours = realHour >= 17 ? nightTime : dayTime;

  return (
    <div className="App" style={checkHours}>
      <Header handleCityPost={handleCityPost} />
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
            // handleCityPost={handleCityPost}
            

          />
        </div>
        <SaveCity
          saveCityData={saveCityData.length > 0 ? saveCityData : ""}
          handleSavedCity={handleSavedCity}
          handleCityDelete={handleCityDelete}
        />

      </div>
    </div>
  );
}

export default App;

import "./Weather.scss";

function Weather(props) {
  let time = new Date().toLocaleTimeString();

  return (
    <div className="weather__details">


      <h2 className="weather__title">Temperature</h2>
      <p className="weather__subtext">{props.mainData.temp}°C</p>


      <p className="weather__subtext">{time}</p>

      <h3 className="weather__city">{props.city.toUpperCase()}</h3>

      <div className="weather__temperature">
        <p className="weather__temperature-text">{props.mainData.temp}</p>
        <img className="weather__temperature-icon" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-celsius.svg" />
      </div>
      
      <p className="weather__subtext">{props.weatherData.description}</p>
      <p className="weather__subtext">{props.weatherData.main}</p>

      <div className="weather__stats">
        <div className="weather__speed">

          <h2 className="weather__title">
            Wind <br /> Speed
          </h2>

        <img className="weather__speed-icon" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg"/>
          <div className="weather__speed-header">
            <h2 className="weather__title">Wind <br/> Speed</h2>
          </div>

          <p className="weather__subtext">{props.wind.speed} km/h</p>
        </div>

        <div className="weather__degrees">

          <h2 className="weather__title">
            Wind <br /> Degrees
          </h2>
          <p className="weather__subtext">{props.wind.deg}°</p>
        </div>
      </div>

      <h2 className="weather__title">Current Time</h2>
      <p className="weather__subtext">{time}</p>
      {/* Save button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          props.handleCityPost();
        }}
      >
        Add to Favourite
      </button>

        <img className="weather__degrees-icon" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/compass.svg"/>
        <div className="weather__degrees-header">
            <h2 className="weather__title">Wind <br/> Degrees</h2>
        </div>
        <div>
          <p className="weather__subtext">{props.wind.deg}°</p>
        </div>
      
    </div>
  
  );
}

export default Weather;

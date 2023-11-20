import "./Weather.scss";

function Weather(props) {
  let time = new Date().toLocaleTimeString();

  return (
    <div className="weather__details">

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
          <img className="weather__speed-icon" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg"/>
            <div className="weather__speed-header">
              <h2 className="weather__title">Wind <br/> Speed</h2>
            </div>
            <p className="weather__subtext">{props.wind.speed} km/h</p>
        </div>

        <div className="weather__degrees">
          <img className="weather__degrees-icon" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/compass.svg"/>
          <div className="weather__degrees-header">
              <h2 className="weather__title">Wind <br/> Degrees</h2>
          </div>
          <p className="weather__subtext">{props.wind.deg}°</p>
        </div>

      </div>

      {/* Save button */}
      <button
        className="weather__button"
        onClick={(e) => {
          e.stopPropagation();
          props.handleCityPost();
        }}
      >
        Add to Favourite
      </button>
      
    </div>
  
  );
}

export default Weather;
